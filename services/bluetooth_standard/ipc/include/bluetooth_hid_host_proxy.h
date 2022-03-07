/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
#ifndef OHOS_BLUETOOTH_BLUETOOTHHIDHOSTPROXY_H
#define OHOS_BLUETOOTH_BLUETOOTHHIDHOSTPROXY_H

#include <iremote_proxy.h>
#include "i_bluetooth_hid_host.h"

namespace OHOS {
namespace Bluetooth {
class BluetoothHidHostProxy : public IRemoteProxy<IBluetoothHidHost> {
public:
    explicit BluetoothHidHostProxy(const sptr<IRemoteObject>& remote) : IRemoteProxy<IBluetoothHidHost>(remote)
    {}
    virtual ~BluetoothHidHostProxy()
    {}

    ErrCode Connect(const BluetoothRawAddress &device, bool& result) override;
    ErrCode Disconnect(const BluetoothRawAddress &device, bool& result) override;
    ErrCode GetDeviceState(const BluetoothRawAddress &device, int& result) override;
    ErrCode GetDevicesByStates(const std::vector<int32_t> &states, std::vector<BluetoothRawAddress>& result) override;
    ErrCode RegisterObserver(const sptr<IBluetoothHidHostObserver> observer) override;
    ErrCode DeregisterObserver(const sptr<IBluetoothHidHostObserver> observer) override;

private:
    static inline BrokerDelegator<BluetoothHidHostProxy> delegator_;
    bool WriteParcelableInt32Vector(const std::vector<int32_t> &parcelableVector, Parcel &reply);
};
} // Bluetooth
} // OHOS

#endif // OHOS_BLUETOOTH_BLUETOOTHHIDHOSTPROXY_H

