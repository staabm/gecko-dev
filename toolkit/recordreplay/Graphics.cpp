/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Interfaces for drawing graphics to an in process buffer when
// recording/replaying.

#include "mozilla/layers/BasicCompositor.h"
#include "mozilla/layers/BufferTexture.h"
#include "mozilla/layers/CompositorBridgeParent.h"
#include "mozilla/layers/ImageDataSerializer.h"
#include "mozilla/layers/LayerManagerComposite.h"
#include "mozilla/layers/LayerTransactionParent.h"
#include "mozilla/layers/LayersMessages.h"

using namespace mozilla::layers;

namespace mozilla::recordreplay {

static LayerManagerComposite* gLayerManager;
static CompositorBridgeParent* gCompositorBridge;
static LayerTransactionParent* gLayerTransactionParent;

static void EnsureInitialized() {
  MOZ_RELEASE_ASSERT(NS_IsMainThread());

  if (gLayerTransactionParent) {
    return;
  }

  Compositor* compositor = new BasicCompositor(nullptr, nullptr);
  gLayerManager = new LayerManagerComposite(compositor);

  gCompositorBridge = new CompositorBridgeParent(nullptr,
                                                 CSSToLayoutDeviceScale(1),
                                                 TimeDuration(),
                                                 CompositorOptions(),
                                                 false,
                                                 gfx::IntSize());
  gCompositorBridge->SetLayerManager(gLayerManager);

  gLayerTransactionParent = new LayerTransactionParent(gLayerManager,
                                                       gCompositorBridge, nullptr,
                                                       LayersId(), TimeDuration());
}

static void DumpDrawTarget();

void SendUpdate(const TransactionInfo& aInfo) {
  EnsureInitialized();

  PrintLog("GraphicsSendUpdate");

  ipc::IPCResult rv = gLayerTransactionParent->RecvUpdate(aInfo);
  MOZ_RELEASE_ASSERT(rv == ipc::IPCResult::Ok());

  gCompositorBridge->CompositeToTarget(VsyncId(), nullptr, nullptr);

  DumpDrawTarget();
}

void SendNewCompositable(const layers::CompositableHandle& aHandle,
                         const layers::TextureInfo& aInfo) {
  EnsureInitialized();

  ipc::IPCResult rv = gLayerTransactionParent->RecvNewCompositable(aHandle, aInfo);
  MOZ_RELEASE_ASSERT(rv == ipc::IPCResult::Ok());
}

// Format to use for graphics data.
static const gfx::SurfaceFormat SurfaceFormat = gfx::SurfaceFormat::R8G8B8X8;

// Buffer for the draw target used for main thread compositing.
static void* gDrawTargetBuffer;
static size_t gDrawTargetBufferSize;

// Dimensions of the last paint which the compositor performed.
static size_t gPaintWidth, gPaintHeight;

already_AddRefed<gfx::DrawTarget> DrawTargetForRemoteDrawing(const gfx::IntRect& aSize) {
  MOZ_RELEASE_ASSERT(NS_IsMainThread());

  if (aSize.IsEmpty()) {
    return nullptr;
  }

  gPaintWidth = aSize.width;
  gPaintHeight = aSize.height;

  gfx::IntSize size(aSize.width, aSize.height);
  size_t bufferSize = ImageDataSerializer::ComputeRGBBufferSize(size, SurfaceFormat);

  if (bufferSize != gDrawTargetBufferSize) {
    free(gDrawTargetBuffer);
    gDrawTargetBuffer = malloc(bufferSize);
    gDrawTargetBufferSize = bufferSize;
  }

  size_t stride = ImageDataSerializer::ComputeRGBStride(SurfaceFormat, aSize.width);
  RefPtr<gfx::DrawTarget> drawTarget = gfx::Factory::CreateDrawTargetForData(
      gfx::BackendType::SKIA, (uint8_t*)gDrawTargetBuffer, size, stride,
      SurfaceFormat,
      /* aUninitialized = */ true);
  MOZ_RELEASE_ASSERT(drawTarget);

  return drawTarget.forget();
}

static void DumpDrawTarget() {
  MOZ_RELEASE_ASSERT(gDrawTargetBufferSize == gPaintWidth * gPaintHeight * 4);
  int numFilled = 0;
  for (int i = 0; i < gDrawTargetBufferSize; i++) {
    if (((char*)gDrawTargetBuffer)[i]) {
      numFilled++;
    }
  }
  PrintLog("DrawTargetContents Width %lu Height %lu Filled %d",
           gPaintWidth, gPaintHeight, numFilled);
}

struct TextureInfo {
  uint8_t* mBuffer;
  BufferDescriptor mDesc;
  TextureFlags mFlags;
};

static std::unordered_map<PTextureChild*, TextureInfo> gTextureInfo;

void RegisterTextureChild(PTextureChild* aChild, TextureData* aData,
                          const SurfaceDescriptor& aDesc,
                          TextureFlags aFlags) {
  MOZ_RELEASE_ASSERT(NS_IsMainThread());

  if (aDesc.type() != SurfaceDescriptor::TSurfaceDescriptorBuffer) {
    return;
  }

  const SurfaceDescriptorBuffer& buf = aDesc.get_SurfaceDescriptorBuffer();
  MOZ_RELEASE_ASSERT(buf.data().type() == MemoryOrShmem::TShmem);
  uint8_t* buffer = static_cast<BufferTextureData*>(aData)->GetBuffer();

  TextureInfo info = {
    buffer,
    buf.desc(),
    aFlags
  };

  gTextureInfo[aChild] = info;
}

TextureHost* CreateTextureHost(PTextureChild* aChild) {
  MOZ_RELEASE_ASSERT(NS_IsMainThread());

  auto iter = gTextureInfo.find(aChild);
  MOZ_RELEASE_ASSERT(iter != gTextureInfo.end());
  const TextureInfo& info = iter->second;
  MemoryTextureHost* rv = new MemoryTextureHost(info.mBuffer, info.mDesc, info.mFlags);

  // Leak the result so it doesn't get deleted later. We aren't respecting
  // ownership rules by giving this MemoryTextureHost an internal pointer to
  // a shmem.
  new RefPtr(rv);

  return rv;
}

} // namespace mozilla::recordreplay
