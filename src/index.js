'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function r(e,r,i){void 0===i&&(i=global);var o=React.useRef();React.useEffect(function(){o.current=r;},[r]),React.useEffect(function(){if(i&&i.addEventListener){var n=function(n){return o.current(n)};return i.addEventListener(e,n),function(){i.removeEventListener(e,n);}}},[e,i]);}

var u={},c=function(t,n,e){return u[t]||(u[t]={callbacks:[],value:e}),u[t].callbacks.push(n),{deregister:function(){var e=u[t].callbacks,r$$1=e.indexOf(n);r$$1>-1&&e.splice(r$$1,1);},emit:function(e){u[t].value!==e&&(u[t].value=e,u[t].callbacks.forEach(function(t){n!==t&&t(e);}));}}};function createPersistedState(u,i){if(void 0===i&&(i=global.localStorage),i){var o=function(t){return {get:function(n,e){var r$$1=t.getItem(n);return null===r$$1?"function"==typeof e?e():e:JSON.parse(r$$1)},set:function(n,e){t.setItem(n,JSON.stringify(e));}}}(i);return function(i){return function(u,i,o){var a=o.get,f=o.set,l=React.useRef(null),s=React.useState(function(){return a(i,u)}),v=s[0],g=s[1];return r("storage",function(t){var n=t.key,e=JSON.parse(t.newValue);n===i&&v!==e&&g(e);}),React.useEffect(function(){return l.current=c(i,g,u),function(){l.current.deregister();}},[]),React.useEffect(function(){f(i,v),l.current.emit(v);},[v]),[v,g]}(i,u,o)}}return React.useState}

/* eslint-disable */
var ClearCache = function (props) {
    var _a = props.duration, duration = _a === void 0 ? 60 * 1000 : _a, _b = props.auto, auto = _b === void 0 ? false : _b, children = props.children;
    var _c = React.useState(true), loading = _c[0], setLoading = _c[1];
    var _d = React.useState(true), isLatestVersion = _d[0], setIsLatestVersion = _d[1];
    var useAppVersionState = createPersistedState('appVersion');
    var _e = useAppVersionState(''), appVersion = _e[0], setAppVersion = _e[1];
    function setVersion(version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setAppVersion(version)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function emptyCacheStorage(version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Clearing cache and hard reloading...');
                        if (!appVersion)
                            return [2 /*return*/];
                        if ('caches' in window) {
                            // Service worker cache should be cleared with caches.delete()
                            caches.keys().then(function (names) {
                                // eslint-disable-next-line no-restricted-syntax
                                for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                                    var name_1 = names_1[_i];
                                    caches.delete(name_1);
                                }
                            });
                        }
                        // clear browser cache and reload page
                        return [4 /*yield*/, setVersion(version || appVersion).then(function () {
                                return window.location.reload(true);
                            })];
                    case 1:
                        // clear browser cache and reload page
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function fetchMeta() {
        fetch("/meta.json", {
            cache: 'no-store'
        })
            .then(function (response) { return response.json(); })
            .then(function (meta) {
            var newVersion = meta.version;
            var currentVersion = appVersion;
            var isUpdated = newVersion === currentVersion;
            if (!isUpdated && !auto) {
                console.log('An update is available!');
                setAppVersion(newVersion);
                setLoading(false);
                setIsLatestVersion(false);
            }
            else if (!isUpdated && auto) {
                emptyCacheStorage(newVersion);
            }
            else {
                setIsLatestVersion(true);
                setLoading(false);
            }
        });
    }
    React.useEffect(function () {
        var fetchCacheTimeout = setInterval(function () { return fetchMeta(); }, duration);
        return function () {
            clearInterval(fetchCacheTimeout);
        };
    }, [loading]);
    React.useEffect(function () {
        fetchMeta();
    }, []);
    return children({
        loading: loading,
        isLatestVersion: isLatestVersion,
        emptyCacheStorage: emptyCacheStorage
    });
};

exports.default = ClearCache;
//# sourceMappingURL=index.js.map
