// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

#pragma once

#include <memory>
#include <vector>

namespace facebook {
namespace react {
class IViewManager;
}
} // namespace facebook
namespace react::uwp {
struct IReactInstance;
}

namespace react::uwp {

using NativeViewManager = std::unique_ptr<facebook::react::IViewManager>;

struct ViewManagerProvider {
  virtual std::vector<NativeViewManager> GetViewManagers(
      const std::shared_ptr<react::uwp::IReactInstance> &instance) = 0;
};

} // namespace react::uwp
