/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Interfaces for use when rendering graphics while recording/replaying.

namespace mozilla::recordreplay {

already_AddRefed<gfx::DrawTarget> DrawTargetForRemoteDrawing(const IntRect& aBounds);

void RegisterTextureChild(layers::PTextureChild* aChild,
                          layers::TextureData* aData,
                          const layers::SurfaceDescriptor& aDesc,
                          layers::TextureFlags aFlags);

layers::TextureHost* CreateTextureHost(layers::PTextureChild* aChild);

TimeStamp CompositeTime();

void SendUpdate(layers::LayerTransactionChild* aChild,
                const layers::TransactionInfo& aInfo);
void SendNewCompositable(layers::LayerTransactionChild* aChild,
                         const layers::CompositableHandle& aHandle,
                         const layers::TextureInfo& aInfo);
void SendReleaseCompositable(layers::LayerTransactionChild* aChild,
                             const layers::CompositableHandle& aHandle);
void SendReleaseLayer(layers::LayerTransactionChild* aChild,
                      const layers::LayerHandle& aHandle);

} // namespace mozilla::recordreplay
