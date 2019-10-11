"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cidade_1 = require("./Cidade");
var Area_1 = require("./Area");
var Casas_1 = require("./Casas/Casas");
var Edificio_1 = require("./Edificios/Edificio");
var casa1_1 = require("./Casas/casa1");
var Edificio1_1 = require("./Edificios/Edificio1");
var cidade = new Cidade_1.Cidade();
/*------------------
--------------------*/
var casas = new Area_1.Area(Casas_1.Casas, 1000);
var edificio = new Area_1.Area(Edificio_1.Edificio, 5000);
//let industria = new Area(Industria,10000);
/*------------------
--------------------*/
var casa1 = new casa1_1.Casa1();
casa1.setNome("casa1");
casa1.setTamanho(500);
var casa2 = new casa1_1.Casa1();
casa2.setNome("casa2");
casa2.setTamanho(600);
var casa3 = new casa1_1.Casa1();
casa2.setNome("casa3");
casa2.setTamanho(200);
var edificio1 = new Edificio1_1.Edificio1();
edificio1.setNome("ed1");
edificio1.setTamanho(4000);
var edificio2 = new Edificio1_1.Edificio1();
edificio1.setNome("ed2");
edificio1.setTamanho(3000);
cidade.addArea(casas);
cidade.addArea(edificio);
cidade.addImovel(casa1);
cidade.addImovel(casa2);
cidade.addImovel(casa3);
cidade.addImovel(edificio1);
cidade.addImovel(edificio2);
cidade.listaImoveis(casas);
cidade.listaImoveis(edificio);
