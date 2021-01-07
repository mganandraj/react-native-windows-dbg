// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// public header

#pragma once

#include <memory>
#include <string>
#include <vector>

#include <TurboModuleManager.h>
#include <cxxreact/Instance.h>
#include "InstanceManager.h"
#include "ViewManager.h"

namespace facebook {
namespace react {

struct IDevSupportManager;
struct IReactRootView;

class InstanceImpl final : public InstanceWrapper, private ::std::enable_shared_from_this<InstanceImpl> {
 public:
  static std::shared_ptr<InstanceImpl> MakeNoBundle(
      std::string &&jsBundleBasePath,
      std::vector<
          std::tuple<std::string, facebook::xplat::module::CxxModule::Provider, std::shared_ptr<MessageQueueThread>>>
          &&cxxModules,
      std::shared_ptr<TurboModuleRegistry> turboModuleRegistry,
      std::shared_ptr<IUIManager> uimanager,
      std::shared_ptr<MessageQueueThread> jsQueue,
      std::shared_ptr<MessageQueueThread> nativeQueue,
      std::shared_ptr<DevSettings> devSettings,
      std::shared_ptr<IDevSupportManager> devManager) noexcept;

  static std::shared_ptr<InstanceImpl> MakeAndLoadBundle(
      std::string &&jsBundleBasePath,
      std::string &&jsBundleRelativePath,
      std::vector<
          std::tuple<std::string, facebook::xplat::module::CxxModule::Provider, std::shared_ptr<MessageQueueThread>>>
          &&cxxModules,
      std::shared_ptr<TurboModuleRegistry> turboModuleRegistry,
      std::shared_ptr<IUIManager> uimanager,
      std::shared_ptr<MessageQueueThread> jsQueue,
      std::shared_ptr<MessageQueueThread> nativeQueue,
      std::shared_ptr<DevSettings> devSettings,
      std::shared_ptr<IDevSupportManager> devManager) noexcept;

  // Instance methods
  void loadBundle(std::string &&jsBundleRelativePath) override;
  void loadBundleSync(std::string &&jsBundleRelativePath) override;
  virtual const std::shared_ptr<Instance> &GetInstance() const noexcept override {
    return m_innerInstance;
  }
  void AttachMeasuredRootView(IReactRootView *rootView, folly::dynamic &&initProps) noexcept override;
  void DetachRootView(IReactRootView *rootView) noexcept override;

  void DispatchEvent(int64_t viewTag, std::string eventName, folly::dynamic &&eventData) override;
  void invokeCallback(const int64_t callbackId, folly::dynamic &&params) override;

  ~InstanceImpl();

 private:
  InstanceImpl(
      std::string &&jsBundleFile,
      std::vector<
          std::tuple<std::string, facebook::xplat::module::CxxModule::Provider, std::shared_ptr<MessageQueueThread>>>
          &&cxxModules,
      std::shared_ptr<TurboModuleRegistry> turboModuleRegistry,
      std::shared_ptr<IUIManager> uimanager,
      std::shared_ptr<MessageQueueThread> jsQueue,
      std::shared_ptr<MessageQueueThread> nativeQueue,
      std::shared_ptr<DevSettings> devSettings,
      std::shared_ptr<IDevSupportManager> devManager);

  InstanceImpl(
      std::string &&jsBundleBasePath,
      std::string &&jsBundleRelativePath,
      std::vector<
          std::tuple<std::string, facebook::xplat::module::CxxModule::Provider, std::shared_ptr<MessageQueueThread>>>
          &&cxxModules,
      std::shared_ptr<IUIManager> uimanager,
      std::shared_ptr<MessageQueueThread> jsQueue,
      std::shared_ptr<MessageQueueThread> nativeQueue,
      std::shared_ptr<DevSettings> devSettings,
      std::shared_ptr<IDevSupportManager> devManager);

  std::vector<std::unique_ptr<NativeModule>> GetDefaultNativeModules(std::shared_ptr<MessageQueueThread> nativeQueue);
  void RegisterForReloadIfNecessary() noexcept;
  void loadBundleInternal(std::string &&jsBundleRelativePath, bool synchronously);

 private:
  std::shared_ptr<Instance> m_innerInstance;

  std::string m_jsBundleBasePath;
  std::shared_ptr<IUIManager> m_uimanager;
  std::shared_ptr<facebook::react::ModuleRegistry> m_moduleRegistry;
  std::shared_ptr<TurboModuleRegistry> m_turboModuleRegistry;
  std::shared_ptr<MessageQueueThread> m_jsThread;
  std::shared_ptr<MessageQueueThread> m_nativeQueue;

  std::shared_ptr<IDevSupportManager> m_devManager;
  std::shared_ptr<DevSettings> m_devSettings;
};

} // namespace react
} // namespace facebook
