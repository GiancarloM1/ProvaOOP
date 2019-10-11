"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cidade_1 = require("./Cidade");
var Area_1 = require("./Area");
var Casas_1 = require("./Casas/Casas");
var casa1_1 = require("./Casas/casa1");
var cidade = new Cidade_1.Cidade();
/*------------------
--------------------*/
var casas = new Area_1.Area(Casas_1.Casas, 1000);
//let edificio = new Area(Edificio,5000);
//let industria = new Area(Industria,10000);
/*------------------
--------------------*/
var casa1 = new casa1_1.Casa1();
casa1.setNome("casa1");
casa1.setTamanho(500);
var casa2 = new casa1_1.Casa1();
casa2.setNome("casa2");
casa2.setTamanho(600);
cidade.addArea(casas);
cidade.addImovel(casa1);
cidade.addImovel(casa2);
cidade.listaImoveis(casas);
