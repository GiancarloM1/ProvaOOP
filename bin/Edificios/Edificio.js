"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Imoveis_1 = require("../Imoveis");
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio() {
        return _super.call(this) || this;
    }
    return Edificio;
}(Imoveis_1.Imoveis));
exports.Edificio = Edificio;
