"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Area_1 = require("./Area");
var Imoveis_1 = require("./Imoveis");
var Cidade = /** @class */ (function () {
    function Cidade() {
        this.Area = [];
        this.Area = [];
    }
    Cidade.prototype.addImovel = function (imovel) {
        if (imovel instanceof Imoveis_1.Imoveis) {
            for (var index = 0; index < this.Area.length; index++) {
                var element = this.Area[index];
                if (element.addImovelToArea(imovel)) {
                    continue;
                }
                else {
                    break;
                }
            }
        }
    };
    Cidade.prototype.addArea = function (area) {
        if (area instanceof Area_1.Area) {
            if (area.getAreaTamanho() > 0 && area.getTipo() != '') {
                this.Area.push(area);
                console.log("Area '" + area.getTipo() + "' adicionada com " + area.getAreaTamanho() + "m² de tamanho total.");
            }
            else {
                return console.log("Tipo nulo ou tamanho zerado, verifique!");
            }
        }
    };
    Cidade.prototype.listaImoveis = function (area) {
        if (area instanceof Area_1.Area) {
            console.log('--------------');
            console.log(area.getTipo());
            area.getListaImovel().forEach(function (element) {
                console.log(element.getNome());
            });
        }
    };
    return Cidade;
}());
exports.Cidade = Cidade;
