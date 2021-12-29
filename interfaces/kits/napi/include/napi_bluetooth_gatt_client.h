/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#ifndef NAPI_BLUETOOTH_GATT_CLIENT_H_
#define NAPI_BLUETOOTH_GATT_CLIENT_H_

#include "bluetooth_gatt_client.h"
#include "bluetooth_log.h"
#include "bluetooth_remote_device.h"
#include "napi_bluetooth_gatt_client_callback.h"

namespace OHOS {
namespace Bluetooth {
const int SLEEP_TIME = 50000;
const int VALUE_1 = 1;
const int VALUE_2 = 2;
const int VALUE_3 = 3;

class NGattClient {
public:

    static napi_value CreateGattClientDevice(napi_env env, napi_callback_info info);
    static void DefineGattClientJSClass(napi_env env);
    static napi_value GattClientConstructor(napi_env env, napi_callback_info info);

    static napi_value On(napi_env env, napi_callback_info info);
    static napi_value Off(napi_env env, napi_callback_info info);

    static napi_value Connect(napi_env env, napi_callback_info info);
    static napi_value Disconnect(napi_env env, napi_callback_info info);
    static napi_value Close(napi_env env, napi_callback_info info);
    static napi_value GetServices(napi_env env, napi_callback_info info);
    static napi_value ReadCharacteristicValue(napi_env env, napi_callback_info info);
    static napi_value ReadDescriptorValue(napi_env env, napi_callback_info info);

    static napi_value OnCharacteristicChanged(napi_env env, napi_callback_info info); // Test callback only

    static napi_value WriteCharacteristicValue(napi_env env, napi_callback_info info);
    static napi_value WriteDescriptorValue(napi_env env, napi_callback_info info);
    static napi_value SetBLEMtuSize(napi_env env, napi_callback_info info);
    static napi_value SetNotifyCharacteristicChanged(napi_env env, napi_callback_info info);

    static napi_value OnConnectionStateChanged(napi_env env, napi_callback_info info); // Test callback only

    bool DiscoverServices();
    std::shared_ptr<GattClient> &GetClient()
    {
        return client_;
    }

    NGattClientCallback &GetCallback()
    {
        return callback_;
    }

    void OnCharacteristicChanged()
    {   // Test callback only
        HILOGI("OnCharacteristicChanged called");
        GattCharacteristic characteristic(UUID::FromString("21"), VALUE_1, VALUE_2, VALUE_3);
        GattDescriptor descriptor(UUID::FromString("41"), VALUE_1, VALUE_2);
        uint8_t data[3] = {50, 51, 52};
        descriptor.SetValue(data, VALUE_3);
        characteristic.AddDescriptor(descriptor);
        callback_.OnCharacteristicChanged(characteristic);
    }

    void OnConnectionStateChanged()
    {   // Test callback only
        HILOGI("Client OnConnectionStateChanged called");
        int connectState = 0;
        int ret = 0;
        callback_.OnConnectionStateChanged(connectState, ret);
    }

    NGattClient(std::string &deviceId)
    {
        HILOGI("NGattClient called");
        device_ = std::make_shared<BluetoothRemoteDevice>(deviceId, 1);
        client_ = std::make_shared<GattClient>(*device_);
        callback_.SetClient(this);
    }
    ~NGattClient() = default;

    static napi_value constructor_;
    ReadCharacteristicValueCallbackInfo *readCharacteristicValueCallbackInfo_;
    ReadDescriptorValueCallbackInfo *readDescriptorValueCallbackInfo_;
    DiscoverServicesCallbackInfo *discoverServicesCallbackInfo_;

private:
    std::shared_ptr<GattClient> client_ = nullptr;
    NGattClientCallback callback_;
    std::shared_ptr<BluetoothRemoteDevice> device_ = nullptr;
};
} // namespace Bluetooth
} // namespace OHOS
#endif /* NAPI_BLUETOOTH_GATT_CLIENT_H_ */