/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Interfaces for drawing graphics to an in process buffer when
// recording/replaying.

#include "mozilla/layers/BasicCompositor.h"
#include "mozilla/layers/CompositorBridgeParent.h"
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

void SendUpdate(const TransactionInfo& aInfo) {
  EnsureInitialized();

  PrintLog("GraphicsSendUpdate");

  ipc::IPCResult rv = gLayerTransactionParent->RecvUpdate(aInfo);
  MOZ_RELEASE_ASSERT(rv == ipc::IPCResult::Ok());

  gCompositorBridge->CompositeToTarget(VsyncId(), nullptr, nullptr);
}

void SendNewCompositable(const layers::CompositableHandle& aHandle,
                         const layers::TextureInfo& aInfo) {
  EnsureInitialized();

  ipc::IPCResult rv = gLayerTransactionParent->RecvNewCompositable(aHandle, aInfo);
  MOZ_RELEASE_ASSERT(rv == ipc::IPCResult::Ok());
}

} // namespace mozilla::recordreplay
