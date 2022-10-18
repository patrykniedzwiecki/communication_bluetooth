var _840471a2ef2afe531ee6aea9267b2e21;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subAutoTest/brAutoTest.ets?entry":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subAutoTest/brAutoTest.ets?entry ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
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
// @ts-nocheck
const ConfigData_1 = __importDefault(__webpack_require__(/*! ../../../Utils/ConfigData */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Utils/ConfigData.ts"));
var _system_router_1  = globalThis.requireNativeModule('system.router');
__webpack_require__(/*! ../../model/testData */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/testData.ets");
const pageTitle_1 = __webpack_require__(/*! ../../../Component/pageTitle */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Component/pageTitle.ets");
const testImageDisplay_1 = __webpack_require__(/*! ../../../Component/testImageDisplay */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Component/testImageDisplay.ets");
const autoTestDataModels_1 = __webpack_require__(/*! ../../model/autoTestDataModels */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/autoTestDataModels.ets");
const autoContentTable_1 = __webpack_require__(/*! ../../../Component/autoContentTable */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/Component/autoContentTable.ets");
__webpack_require__(/*! ../../model/bluetoothModel */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/bluetoothModel.ts");
__webpack_require__(/*! @ohos.bluetooth */ "../../api/@ohos.bluetooth.d.ts");
__webpack_require__(/*! @ohos.bluetooth */ "../../api/@ohos.bluetooth.d.ts");
const BRInterface = __importStar(__webpack_require__(/*! ../../model/brInterface */ "../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/model/brInterface.ets"));
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
__webpack_require__(/*! @ohos.events.emitter */ "../../api/@ohos.events.emitter.d.ts");
class BrAutoTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('BrAutoTest', this, "message");
        this.__textMessage = new ObservedPropertySimple('null', this, "textMessage");
        this.testItem = _system_router_1.getParams().testId;
        this.__autoTestMessage = AppStorage.GetOrCreate().setAndLink("autoTestMessage", "", this);
        this.__changIndex = new ObservedPropertySimple(-1, this, "changIndex");
        this.__testMessage = new ObservedPropertySimple("", this, "testMessage");
        this.__testState = new ObservedPropertySimple(false, this, "testState");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.textMessage !== undefined) {
            this.textMessage = params.textMessage;
        }
        if (params.testItem !== undefined) {
            this.testItem = params.testItem;
        }
        if (params.changIndex !== undefined) {
            this.changIndex = params.changIndex;
        }
        if (params.testMessage !== undefined) {
            this.testMessage = params.testMessage;
        }
        if (params.testState !== undefined) {
            this.testState = params.testState;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__textMessage.aboutToBeDeleted();
        this.__autoTestMessage.aboutToBeDeleted();
        this.__changIndex.aboutToBeDeleted();
        this.__testMessage.aboutToBeDeleted();
        this.__testState.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get textMessage() {
        return this.__textMessage.get();
    }
    set textMessage(newValue) {
        this.__textMessage.set(newValue);
    }
    get autoTestMessage() {
        return this.__autoTestMessage.get();
    }
    set autoTestMessage(newValue) {
        this.__autoTestMessage.set(newValue);
    }
    get changIndex() {
        return this.__changIndex.get();
    }
    set changIndex(newValue) {
        this.__changIndex.set(newValue);
    }
    get testMessage() {
        return this.__testMessage.get();
    }
    set testMessage(newValue) {
        this.__testMessage.set(newValue);
    }
    get testState() {
        return this.__testState.get();
    }
    set testState(newValue) {
        this.__testState.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("pages/subAutoTest/brAutoTest.ets(46:5)");
        Stack.create({ alignContent: Alignment.TopStart });
        Stack.debugLine("pages/subAutoTest/brAutoTest.ets(47:7)");
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new testImageDisplay_1.TestImageDisplay("2", this, { testItem: this.testItem }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                testItem: this.testItem
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new pageTitle_1.PageTitle("3", this, { testItem: this.testItem }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                testItem: this.testItem
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        Stack.pop();
        Stack.create();
        Stack.debugLine("pages/subAutoTest/brAutoTest.ets(51:7)");
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Column.create();
        Column.debugLine("pages/subAutoTest/brAutoTest.ets(52:7)");
        Column.height(520);
        Column.width("100%");
        Column.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Scroll.create();
        Scroll.debugLine("pages/subAutoTest/brAutoTest.ets(53:9)");
        Scroll.scrollBarWidth(10);
        Scroll.scrollBar(BarState.Auto);
        Column.create();
        Column.debugLine("pages/subAutoTest/brAutoTest.ets(54:11)");
        Column.width("100%");
        Column.height(300);
        Text.create("API验证:");
        Text.debugLine("pages/subAutoTest/brAutoTest.ets(55:13)");
        Text.fontSize("17vp");
        Text.margin({ top: "10vp", bottom: "10vp", left: "10vp", right: "280vp" });
        Text.textAlign(TextAlign.Start);
        Text.pop();
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new autoContentTable_1.AutoContentTable("4", this, { testItem: this.testItem, autoItems: autoTestDataModels_1.initBrAutoData(), changeIndex: this.changIndex, testMessage: this.testMessage, testState: this.testState }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                testItem: this.testItem, autoItems: autoTestDataModels_1.initBrAutoData(), changeIndex: this.changIndex, testMessage: this.testMessage, testState: this.testState
            });
            View.create(earlierCreatedChild_4);
        }
        Column.pop();
        Scroll.pop();
        Stack.create();
        Stack.debugLine("pages/subAutoTest/brAutoTest.ets(651:9)");
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Scroll.create();
        Scroll.debugLine("pages/subAutoTest/brAutoTest.ets(653:9)");
        Scroll.scrollBarWidth(10);
        Scroll.scrollBar(BarState.Auto);
        Column.create();
        Column.debugLine("pages/subAutoTest/brAutoTest.ets(654:11)");
        Column.width("100%");
        Column.height(260);
        Text.create("Debug日志:");
        Text.debugLine("pages/subAutoTest/brAutoTest.ets(655:13)");
        Text.fontSize("17vp");
        Text.margin({ top: "8vp", bottom: "8vp", left: "10vp", right: "258vp" });
        Text.textAlign(TextAlign.Start);
        Text.pop();
        List.create();
        List.debugLine("pages/subAutoTest/brAutoTest.ets(659:13)");
        List.height("80%");
        ListItem.create();
        ListItem.debugLine("pages/subAutoTest/brAutoTest.ets(660:15)");
        Text.create("log:" + "\n" + this.autoTestMessage);
        Text.debugLine("pages/subAutoTest/brAutoTest.ets(661:17)");
        Text.fontSize("17vp");
        Text.margin({ top: "5vp", left: "30vp", right: "10vp" });
        Text.textAlign(TextAlign.Start);
        Text.pop();
        ListItem.pop();
        List.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
        Stack.create();
        Stack.debugLine("pages/subAutoTest/brAutoTest.ets(681:7)");
        Stack.height("1vp");
        Stack.backgroundColor("#000000");
        Stack.pop();
        Column.create();
        Column.debugLine("pages/subAutoTest/brAutoTest.ets(682:7)");
        Column.backgroundColor({ "id": 125829132, "type": 10001, params: [] });
        Column.width(ConfigData_1.default.WH_100_100);
        Column.height(ConfigData_1.default.WH_100_100);
        Button.createWithChild({ type: ButtonType.Normal, stateEffect: true });
        Button.debugLine("pages/subAutoTest/brAutoTest.ets(683:9)");
        Button.borderRadius(8);
        Button.backgroundColor({ "id": 16777288, "type": 10001, params: [] });
        Button.width(180);
        Button.height(50);
        Button.margin({ top: "15vp" });
        Button.onClick((event) => {
            AlertDialog.show({ message: 'AutoTest is successful' });
            let autoTestMessage = "";
            this.changIndex = 0;
            //强制刷新
            this.changIndex = 1;
            //          this.changIndex=2
            //          this.changIndex=3
            let message = BRInterface.testEnableBluetooth();
            autoTestMessage += message + "\n"; // 开蓝牙
            if (message && message.length > 0) {
                this.changIndex = 0;
                this.testState = true;
                this.testMessage = message;
            }
            message = BRInterface.testGetState(); // 设置状态
            autoTestMessage += message + "\n"; // 开蓝牙
            if (message && message.length > 0) {
                this.changIndex = 1;
                this.testState = true;
                this.testMessage = message;
            }
            autoTestMessage += BRInterface.testSetLocalName() + "\n"; //设置本地名称
            autoTestMessage += BRInterface.testGetLocalName() + "\n"; //获取本地名称
            autoTestMessage += BRInterface.testSetBluetoothScanMode() + "\n"; //设置扫描模式
            autoTestMessage += BRInterface.testGetBluetoothScanMode() + "\n"; //获取扫描模式
            autoTestMessage += BRInterface.testStartBluetoothDiscovery() + "\n"; //开始蓝牙发现
            autoTestMessage += BRInterface.testStopBluetoothDiscovery() + "\n"; //停止蓝牙发现
            autoTestMessage += BRInterface.testPairDevice() + "\n"; //配对设备
            autoTestMessage += BRInterface.testGetBtConnectionState() + "\n"; //获取当前连接状态
            autoTestMessage += BRInterface.testGetRemoteDeviceName() + "\n"; //获取远程设备名称
            autoTestMessage += BRInterface.testGetRemoteDeviceClass() + "\n"; //获取远程设备类型
            autoTestMessage += BRInterface.testGetPairedDevices() + "\n"; //获取配对设备MAC
            autoTestMessage += BRInterface.testCancelPairedDevice() + "\n"; //取消配对
            autoTestMessage += BRInterface.testDisableBluetooth() + "\n"; //关蓝牙
            AppStorage.SetOrCreate("autoTestMessage", autoTestMessage);
            let msg = "";
            msg = "测试完成";
            console.log(msg);
            _system_prompt_1.showToast({ message: msg });
        });
        Row.create();
        Row.debugLine("pages/subAutoTest/brAutoTest.ets(684:11)");
        Row.alignItems(VerticalAlign.Center);
        Text.create('自动测试');
        Text.debugLine("pages/subAutoTest/brAutoTest.ets(685:13)");
        Text.fontSize("24vp");
        Text.fontColor(0xffffff);
        Text.margin({ left: 5, right: 5 });
        Text.pop();
        Row.pop();
        Button.pop();
        Column.pop();
        Column.pop();
    }
}
loadDocument(new BrAutoTest("1", undefined, {}));


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
/******/ 			"./pages/subAutoTest/brAutoTest": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["commons"], () => (__webpack_require__("../../../../../gitee/commbluetooth/test/example/BluetoothTest-bak/entry/src/main/ets/MainAbility/pages/subAutoTest/brAutoTest.ets?entry")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_840471a2ef2afe531ee6aea9267b2e21 = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=brAutoTest.js.map