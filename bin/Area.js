"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Area = /** @class */ (function () {
    function Area(tipo, areaTamanhoTotal) {
        this.imovel = [];
        this.tipo = tipo;
        this.areaTamanhoTotal = areaTamanhoTotal;
        this.areaTamanhoSobrando = this.areaTamanhoTotal;
        this.imovel = [];
        console.log(tipo);
    }
    Area.prototype.getListaImovel = function () {
        return this.imovel;
    };
    Area.prototype.addImovelToArea = function (imovel) {
        if (imovel == null || imovel == undefined) {
            return false;
        }
        console.log(imovel.getTamanho());
        if (imovel instanceof this.tipo && (this.areaTamanhoSobrando >= imovel.getTamanho())) {
            console.log("Imovel '" + imovel.getNome() + "' adicionado com sucesso");
            this.imovel.push(imovel);
            this.areaTamanhoSobrando = this.areaTamanhoSobrando - imovel.getTamanho();
            console.log(this.areaTamanhoSobrando + "sobrando na area" + this.tipo);
            return false;
        }
        else {
            console.log("Tamanho do imovel '" + imovel.getNome() + "' ultrapassa o disponivel na area!!");
            return true;
        }
    };
    Area.prototype.getAreaTamanho = function () {
        return this.areaTamanhoTotal;
    };
    Area.prototype.getTipo = function () {
        return this.tipo;
    };
    return Area;
}());
exports.Area = Area;
