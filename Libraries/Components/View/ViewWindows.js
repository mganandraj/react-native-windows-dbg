"use strict";
/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewWindows = void 0;
var React = require("react");
var react_native_1 = require("react-native");
/**
 * Same as {@link https://facebook.github.io/react-native/docs/view | react-native's View}, but with extra Windows specific functionality
 *
 * @remarks
 * Prop type: {@link IViewWindowsProps}.
 *
 */
exports.ViewWindows = React.forwardRef(function (props, ref) { return (React.createElement(react_native_1.View, __assign({ ref: ref }, props))); });
//# sourceMappingURL=ViewWindows.js.map