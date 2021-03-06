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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Glyph = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var RCTGlyph = react_native_1.requireNativeComponent('PLYIcon');
/**
 * Glyph is a wrapper for the Xaml Glyph control
 *
 * This control is used to render Glyphs from a Font file, which might be
 * used similar to SVG to have vector based images that also have the
 * ability to be rendered with a specific color
 */
var Glyph = /** @class */ (function (_super) {
    __extends(Glyph, _super);
    function Glyph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Glyph.prototype.render = function () {
        var props = __assign({}, this.props);
        props.style = this.props.style;
        return React.createElement(RCTGlyph, __assign({}, props));
    };
    return Glyph;
}(React.PureComponent));
exports.Glyph = Glyph;
//# sourceMappingURL=Glyph.js.map