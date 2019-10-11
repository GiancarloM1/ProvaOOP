"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Imoveis = /** @class */ (function () {
    function Imoveis() {
        this.nome = '';
        this.tamanho = 0;
    }
    Imoveis.prototype.getNome = function () {
        return this.nome;
    };
    Imoveis.prototype.setNome = function (nome) {
        if (nome != '') {
            this.nome = nome;
        }
    };
    Imoveis.prototype.getTamanho = function () {
        return this.tamanho;
    };
    Imoveis.prototype.setTamanho = function (tamanho) {
        if (tamanho > 0) {
            this.tamanho = tamanho;
        }
    };
    return Imoveis;
}());
exports.Imoveis = Imoveis;
