/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportKeyboard = void 0;
var React = require("react");
exports.supportKeyboard = function (WrappedComponent) {
    var SupportKeyboard = /** @class */ (function (_super) {
        __extends(SupportKeyboard, _super);
        function SupportKeyboard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SupportKeyboard.prototype.render = function () {
            var _a = this.props, forwardedRef = _a.forwardedRef, rest = __rest(_a, ["forwardedRef"]);
            return React.createElement(WrappedComponent, __assign({ ref: forwardedRef }, rest));
        };
        return SupportKeyboard;
    }(React.Component));
    // tslint:disable-next-line:no-any
    return React.forwardRef(function (props, ref) {
        return React.createElement(SupportKeyboard, __assign({}, props, { forwardedRef: ref }));
    });
};
//# sourceMappingURL=KeyboardExt.js.map