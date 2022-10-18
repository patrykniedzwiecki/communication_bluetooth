var _840471a2ef2afe531ee6aea9267b2e21;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
/**
 * SPP Test Page Of Bluetooth test
 */
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/ConfigData */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Utils/ConfigData.ts"));
const LogUtil_1 = __importDefault(__webpack_require__(/*! ../../../../Utils/LogUtil */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Utils/LogUtil.ts"));
var _ohos_bluetooth_1  = globalThis.requireNapi('bluetooth') || (isSystemplugin('bluetooth', 'ohos') ? globalThis.ohosplugin.bluetooth : isSystemplugin('bluetooth', 'system') ? globalThis.systemplugin.bluetooth : undefined);
const bluetoothModel_1 = __importDefault(__webpack_require__(/*! ../../../model/bluetoothModel */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/bluetoothModel.ts"));
const bluetoothDevice_1 = __importDefault(__webpack_require__(/*! ../../../model/bluetoothDevice */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/bluetoothDevice.ts"));
const BluetoothDeviceController_1 = __importDefault(__webpack_require__(/*! ../../../controller/BluetoothDeviceController */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/controller/BluetoothDeviceController.ts"));
const pageTitle_1 = __webpack_require__(/*! ../../../../Component/pageTitle */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Component/pageTitle.ets");
const contentTable_1 = __webpack_require__(/*! ../../../../Component/contentTable */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Component/contentTable.ets");
const testDataModels_1 = __webpack_require__(/*! ../../../model/testDataModels */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/testDataModels.ets");
let MODEL = "bluetoothModel:";
class SppClient extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple("", this, "message");
        this.__isConnection = new ObservedPropertySimple(false, this, "isConnection");
        this.__dataReadMessage = AppStorage.GetOrCreate().setAndLink("dataReadMessage", "", this);
        this.__btConnectionState = new ObservedPropertySimple(0, this, "btConnectionState");
        this.__profileType = new ObservedPropertySimple(0, this, "profileType");
        this.__connectionStateInfo = new ObservedPropertySimple("", this, "connectionStateInfo");
        this.stateBT = "";
        this.sppOption = {};
        this.uuid = "00001101-0000-1000-8000-00805f9b34fb";
        this.serverNumber = -1;
        this.clientNumber = -1;
        this.sppWriteText = '';
        this.__deviceId = new ObservedPropertySimple("00:1A:7D:DA:71:15", this, "deviceId");
        this.__writeData = new ObservedPropertySimple('11', this, "writeData");
        this.TAG_PAGE = ConfigData_1.default.TAG + 'Paired_Device ';
        this.__btEnable = AppStorage.GetOrCreate().setAndLink("bluetoothIsOn", false, this);
        this.__currentClick = new ObservedPropertySimple(-1, this, "currentClick");
        this.__pairingDevice = AppStorage.GetOrCreate().setAndLink("pairedDeviceInfo", new bluetoothDevice_1.default, this);
        this.__controller = AppStorage.GetOrCreate().setAndLink("btDeviceController", new BluetoothDeviceController_1.default, this);
        this.__pairPinCode = new ObservedPropertySimple('', this, "pairPinCode");
        this.pairDialog = new CustomDialogController({
            builder: () => {
                let jsDialog = new PairDialog("4", this, {
                    deviceName: this.pairingDevice.deviceName,
                    pinCode: this.pairPinCode,
                    action: (accept) => {
                        this.confirmPairing(accept);
                    }
                });
                jsDialog.setController(this.pairDialog);
                View.create(jsDialog);
            },
            alignment: DialogAlignment.Bottom,
            autoCancel: true
        }, this);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.isConnection !== undefined) {
            this.isConnection = params.isConnection;
        }
        if (params.btConnectionState !== undefined) {
            this.btConnectionState = params.btConnectionState;
        }
        if (params.profileType !== undefined) {
            this.profileType = params.profileType;
        }
        if (params.connectionStateInfo !== undefined) {
            this.connectionStateInfo = params.connectionStateInfo;
        }
        if (params.stateBT !== undefined) {
            this.stateBT = params.stateBT;
        }
        if (params.sppOption !== undefined) {
            this.sppOption = params.sppOption;
        }
        if (params.uuid !== undefined) {
            this.uuid = params.uuid;
        }
        if (params.serverNumber !== undefined) {
            this.serverNumber = params.serverNumber;
        }
        if (params.clientNumber !== undefined) {
            this.clientNumber = params.clientNumber;
        }
        if (params.sppWriteText !== undefined) {
            this.sppWriteText = params.sppWriteText;
        }
        if (params.deviceId !== undefined) {
            this.deviceId = params.deviceId;
        }
        if (params.writeData !== undefined) {
            this.writeData = params.writeData;
        }
        if (params.TAG_PAGE !== undefined) {
            this.TAG_PAGE = params.TAG_PAGE;
        }
        if (params.currentClick !== undefined) {
            this.currentClick = params.currentClick;
        }
        if (params.pairPinCode !== undefined) {
            this.pairPinCode = params.pairPinCode;
        }
        if (params.pairDialog !== undefined) {
            this.pairDialog = params.pairDialog;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__isConnection.aboutToBeDeleted();
        this.__dataReadMessage.aboutToBeDeleted();
        this.__btConnectionState.aboutToBeDeleted();
        this.__profileType.aboutToBeDeleted();
        this.__connectionStateInfo.aboutToBeDeleted();
        this.__deviceId.aboutToBeDeleted();
        this.__writeData.aboutToBeDeleted();
        this.__btEnable.aboutToBeDeleted();
        this.__currentClick.aboutToBeDeleted();
        this.__pairingDevice.aboutToBeDeleted();
        this.__controller.aboutToBeDeleted();
        this.__pairPinCode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get isConnection() {
        return this.__isConnection.get();
    }
    set isConnection(newValue) {
        this.__isConnection.set(newValue);
    }
    get dataReadMessage() {
        return this.__dataReadMessage.get();
    }
    set dataReadMessage(newValue) {
        this.__dataReadMessage.set(newValue);
    }
    get btConnectionState() {
        return this.__btConnectionState.get();
    }
    set btConnectionState(newValue) {
        this.__btConnectionState.set(newValue);
    }
    get profileType() {
        return this.__profileType.get();
    }
    set profileType(newValue) {
        this.__profileType.set(newValue);
    }
    get connectionStateInfo() {
        return this.__connectionStateInfo.get();
    }
    set connectionStateInfo(newValue) {
        this.__connectionStateInfo.set(newValue);
    }
    get deviceId() {
        return this.__deviceId.get();
    }
    set deviceId(newValue) {
        this.__deviceId.set(newValue);
    }
    get writeData() {
        return this.__writeData.get();
    }
    set writeData(newValue) {
        this.__writeData.set(newValue);
    }
    get btEnable() {
        return this.__btEnable.get();
    }
    set btEnable(newValue) {
        this.__btEnable.set(newValue);
    }
    get currentClick() {
        return this.__currentClick.get();
    }
    set currentClick(newValue) {
        this.__currentClick.set(newValue);
    }
    get pairingDevice() {
        return this.__pairingDevice.get();
    }
    set pairingDevice(newValue) {
        this.__pairingDevice.set(newValue);
    }
    get controller() {
        return this.__controller.get();
    }
    set controller(newValue) {
        this.__controller.set(newValue);
    }
    get pairPinCode() {
        return this.__pairPinCode.get();
    }
    set pairPinCode(newValue) {
        this.__pairPinCode.set(newValue);
    }
    aboutToAppear() {
        this.btEnable = bluetoothModel_1.default.isStateOn();
        AppStorage.SetOrCreate('bluetoothIsOn', this.btEnable);
        AppStorage.SetOrCreate('inputDeviceId', this.deviceId);
        AppStorage.SetOrCreate('inputUuid', this.uuid);
        AppStorage.SetOrCreate('writeData', this.writeData);
    }
    render() {
        Row.create();
        Row.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(78:5)");
        Row.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Row.height('100%');
        Row.alignItems(VerticalAlign.Top);
        Column.create();
        Column.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(79:7)");
        Column.width('100%');
        Column.create();
        Column.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(80:9)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new pageTitle_1.PageTitle("2", this, { detail: 'SPP_CLIENT业务' }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                detail: 'SPP_CLIENT业务'
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Stack.create();
        Stack.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(83:11)");
        Stack.height("0.5vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Row.create();
        Row.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(84:11)");
        Row.backgroundColor({ "id": 16777304, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("目标设备MAC：");
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(85:13)");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.deviceId, placeholder: "请输入mac地址" });
        TextInput.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(86:13)");
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.deviceId = str;
            AppStorage.SetOrCreate('inputDeviceId', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(99:11)");
        Row.backgroundColor({ "id": 16777309, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("目标设备UUID：");
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(100:13)");
        Text.fontSize(17);
        Text.width(70);
        Text.pop();
        TextInput.create({ text: this.uuid, placeholder: "请输入uuid" });
        TextInput.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(101:13)");
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.uuid = str;
            AppStorage.SetOrCreate('inputUuid', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(114:11)");
        Row.backgroundColor({ "id": 16777304, "type": 10001, params: [] });
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("写入目标设备数据：");
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(115:13)");
        Text.fontSize(17);
        Text.width(85);
        Text.pop();
        TextInput.create({ text: this.writeData, placeholder: "请输入写入的数据" });
        TextInput.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(116:13)");
        TextInput.fontSize("15vp");
        TextInput.onChange((str) => {
            this.writeData = str;
            AppStorage.SetOrCreate('writeData', str);
        });
        TextInput.width("80%");
        TextInput.borderRadius(1);
        Row.pop();
        Row.create();
        Row.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(129:11)");
        Row.padding(5);
        Row.justifyContent(FlexAlign.Start);
        Row.alignItems(VerticalAlign.Center);
        Text.create("读取的数据为：");
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(130:13)");
        Text.fontSize("17vp");
        Text.pop();
        Text.create(this.dataReadMessage);
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(132:13)");
        Text.fontSize("15vp");
        Text.width("80%");
        Text.borderRadius(1);
        Text.pop();
        Row.pop();
        Column.create();
        Column.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(140:11)");
        Column.backgroundColor({ "id": 16777304, "type": 10001, params: [] });
        Column.visibility(Visibility.Visible);
        Text.create("接口调用结果： " + this.message);
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(141:13)");
        Text.fontSize("17vp");
        Text.padding(10);
        Text.textAlign(TextAlign.Center);
        Text.pop();
        Column.pop();
        Scroll.create();
        Scroll.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(148:11)");
        Scroll.height('65%');
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new contentTable_1.ContentTable("3", this, { apiItems: testDataModels_1.initSppClientApiData() })); //子层调用
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                apiItems: testDataModels_1.initSppClientApiData()
            });
            View.create(earlierCreatedChild_3);
        }
        Scroll.pop();
        Column.pop();
        Column.pop();
        Row.pop();
    }
    sppClientClose() {
        LogUtil_1.default.info(MODEL + 'sppCloseClientSocket clientNumber: ' + JSON.stringify(this.clientNumber));
        _ohos_bluetooth_1.sppCloseClientSocket(this.clientNumber);
        this.message = '关闭成功 clientNumber' + this.clientNumber;
    }
    /**
     * 获取的clientNumber用作客户端后续读/写操作socket的id
     * @param number
     */
    acceptClientSocket(number) {
        console.log('spp clientSocket socketID: ' + number);
        // 获取的clientNumber用作服务端后续读/写操作socket的id。
        this.clientNumber = number;
    }
    dataRead(dataBuffer) {
        const data = new Uint8Array(dataBuffer);
        console.log('spp bluetooth read is: ' + data);
        if (data != null) {
            this.dataReadMessage = "读取成功" + JSON.stringify(data);
        }
        else {
            this.dataReadMessage = "读取失败";
        }
    }
    /**
    * 字符串转arrayBuffer
    * @param {*} str 需要转换的字符串
    * @returns 返回 arrayBuffer
    */
    strToArrayBuffer(str) {
        let array = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            array[i] = str.charCodeAt(i);
        }
        return array.buffer;
    }
    /**
    * Pair device
    * @param device
    */
    pairDevice(deviceId) {
        this.controller.pair(this.deviceId, (pinCode) => {
            LogUtil_1.default.info(this.TAG_PAGE + 'pairDevice success callback : pinCode = ' + pinCode);
            // show pair pin dialog
            this.pairPinCode = pinCode;
            this.pairingDevice.deviceId = this.deviceId;
            this.pairingDevice.deviceName = this.deviceId;
            this.pairDialog.open();
        }, () => {
            LogUtil_1.default.info(this.TAG_PAGE + 'pairDevice error callback');
            this.showPairFailedDialog();
        });
    }
    /**
     * Confirm pairing
     */
    confirmPairing(accept) {
        LogUtil_1.default.info(this.TAG_PAGE + 'confirmPairing : pairingDevice + ' + JSON.stringify(this.pairingDevice));
        this.controller.confirmPairing(this.pairingDevice.deviceId, accept);
    }
    /**
     * Show pair failed dialog
     */
    showPairFailedDialog() {
        this.showPairingFailedDialog();
    }
    /**
     * Show device illegal prompt dialog
     */
    showDeviceIllegalPromptDialog(action) {
        AlertDialog.show({
            message: { "id": 16777229, "type": 10003, params: [] },
            primaryButton: {
                value: { "id": 16777253, "type": 10003, params: [] },
                action: () => {
                    LogUtil_1.default.info(this.TAG_PAGE + 'Closed callbacks');
                }
            },
            secondaryButton: {
                value: { "id": 16777237, "type": 10003, params: [] },
                action: () => {
                    action();
                    LogUtil_1.default.info(this.TAG_PAGE + `AlertDialog success:`);
                }
            },
            alignment: DialogAlignment.Bottom
        });
    }
    /**
     * Show connect Failed Dialog
     */
    showConnectFailedDialog() {
        showDialog({ "id": 16777231, "type": 10003, params: [] }, { "id": 16777232, "type": 10003, params: [] }, { "id": 16777236, "type": 10003, params: [] });
    }
    /**
     * Show pairing failed title Dialog
     */
    showPairingFailedDialog() {
        showDialog({ "id": 16777269, "type": 10003, params: [] }, { "id": 16777268, "type": 10003, params: [] }, { "id": 16777236, "type": 10003, params: [] });
    }
}
class PairDialog extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.dialogController = undefined;
        this.action = undefined;
        this.deviceName = undefined;
        this.pinCode = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
        if (params.action !== undefined) {
            this.action = params.action;
        }
        if (params.deviceName !== undefined) {
            this.deviceName = params.deviceName;
        }
        if (params.pinCode !== undefined) {
            this.pinCode = params.pinCode;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    setController(ctr) {
        this.dialogController = ctr;
    }
    aboutToAppear() {
        LogUtil_1.default.log(ConfigData_1.default.TAG + `bluetooth PairDialog aboutToAppear pinCode = ${this.pinCode}`);
    }
    render() {
        Column.create();
        Column.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(295:5)");
        Column.padding({
            left: { "id": 16777372, "type": 10002, params: [] },
            right: { "id": 16777372, "type": 10002, params: [] }
        });
        Column.width(ConfigData_1.default.WH_100_100);
        Text.create({ "id": 16777241, "type": 10003, params: [] });
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(296:7)");
        Text.fontSize({ "id": 16777393, "type": 10002, params: [] });
        Text.height({ "id": 16777518, "type": 10002, params: [] });
        Text.width(ConfigData_1.default.WH_100_100);
        Text.padding({
            left: { "id": 16777372, "type": 10002, params: [] },
            top: { "id": 16777361, "type": 10002, params: [] },
            bottom: { "id": 16777361, "type": 10002, params: [] }
        });
        Text.pop();
        Column.create();
        Column.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(305:7)");
        Column.width(ConfigData_1.default.WH_100_100);
        Column.padding({
            left: { "id": 16777372, "type": 10002, params: [] },
            right: { "id": 16777372, "type": 10002, params: [] }
        });
        If.create();
        if (this.pinCode) {
            If.branchId(0);
            Text.create({ "id": 16777239, "type": 10003, params: [this.deviceName, this.deviceName] });
            Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(307:11)");
            Text.fontSize({ "id": 16777389, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.margin({
                top: { "id": 16777361, "type": 10002, params: [] },
                bottom: { "id": 16777361, "type": 10002, params: [] }
            });
            Text.pop();
            Text.create(`${this.pinCode}`);
            Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(315:11)");
            Text.fontSize({ "id": 16777423, "type": 10002, params: [] });
            Text.fontWeight(FontWeight.Bolder);
            Text.width(ConfigData_1.default.WH_100_100);
            Text.textAlign(TextAlign.Center);
            Text.margin({
                top: { "id": 16777400, "type": 10002, params: [] },
                bottom: { "id": 16777400, "type": 10002, params: [] }
            });
            Text.pop();
        }
        else {
            If.branchId(1);
            Text.create({ "id": 16777240, "type": 10003, params: [] });
            Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(326:11)");
            Text.fontSize({ "id": 16777389, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.margin({
                bottom: { "id": 16777455, "type": 10002, params: [] }
            });
            Text.pop();
            Text.create(this.deviceName);
            Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(333:11)");
            Text.fontSize({ "id": 16777389, "type": 10002, params: [] });
            Text.width(ConfigData_1.default.WH_100_100);
            Text.fontWeight(FontWeight.Bold);
            Text.pop();
        }
        If.pop();
        // button
        Flex.create({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
        Flex.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(340:9)");
        // button
        Flex.width(ConfigData_1.default.WH_100_100);
        // button
        Flex.height({ "id": 16777518, "type": 10002, params: [] });
        Button.createWithChild();
        Button.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(342:11)");
        Button.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Button.width({ "id": 16777478, "type": 10002, params: [] });
        Button.height({ "id": 16777508, "type": 10002, params: [] });
        Button.flexGrow(1);
        Button.onClick(() => {
            this.dialogController.close();
            this.action(false);
        });
        Text.create({ "id": 16777253, "type": 10003, params: [] });
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(343:13)");
        Text.fontSize({ "id": 16777389, "type": 10002, params: [] });
        Text.fontColor(Color.Blue);
        Text.pop();
        Button.pop();
        Divider.create();
        Divider.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(356:11)");
        Divider.height({ "id": 16777489, "type": 10002, params: [] });
        Divider.strokeWidth(0.5);
        Divider.vertical(true);
        Divider.color(({ "id": 16777295, "type": 10001, params: [] }));
        Button.createWithChild();
        Button.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(362:11)");
        Button.backgroundColor({ "id": 16777313, "type": 10001, params: [] });
        Button.width({ "id": 16777478, "type": 10002, params: [] });
        Button.height({ "id": 16777508, "type": 10002, params: [] });
        Button.flexGrow(1);
        Button.onClick(() => {
            this.dialogController.close();
            this.action(true);
        });
        Text.create({ "id": 16777237, "type": 10003, params: [] });
        Text.debugLine("pages/subManualApiTest/subSppTest/sppClientTest.ets(363:13)");
        Text.fontSize({ "id": 16777389, "type": 10002, params: [] });
        Text.fontColor(Color.Blue);
        Text.pop();
        Button.pop();
        // button
        Flex.pop();
        Column.pop();
        Column.pop();
    }
}
/**
 * Pair mode prompt
 * @param dialogTitle Dialog title
 * @param dialogMessage Dialog message
 * @param buttonValue Dialog buttonValue
 */
function showDialog(dialogTitle, dialogMessage, buttonValue) {
    AlertDialog.show({
        title: dialogTitle,
        message: dialogMessage,
        confirm: {
            value: buttonValue,
            action: () => {
                LogUtil_1.default.info('Button-clicking callback');
            }
        },
        cancel: () => {
            LogUtil_1.default.info('Closed callbacks');
        },
        alignment: DialogAlignment.Bottom
    });
}
loadDocument(new SppClient("1", undefined, {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var commonCachedModule = globalThis["__common_module_cache___840471a2ef2afe531ee6aea9267b2e21"] ? globalThis["__common_module_cache___840471a2ef2afe531ee6aea9267b2e21"][moduleId]: null;
/******/ 		if (commonCachedModule) { return commonCachedModule.exports; }
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		if (globalThis["__common_module_cache___840471a2ef2afe531ee6aea9267b2e21"] && moduleId.indexOf("?name=") < 0 && Object.keys(globalThis["__common_module_cache___840471a2ef2afe531ee6aea9267b2e21"]).indexOf(moduleId) >= 0) {
/******/ 		  globalThis["__common_module_cache___840471a2ef2afe531ee6aea9267b2e21"][moduleId] = module;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./pages/subManualApiTest/subSppTest/sppClientTest": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_840471a2ef2afe531ee6aea9267b2e21"] = globalThis["webpackChunk_840471a2ef2afe531ee6aea9267b2e21"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subManualApiTest/subSppTest/sppClientTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_840471a2ef2afe531ee6aea9267b2e21 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=sppClientTest.js.map