import { Cidade } from "./Cidade";
import { Area } from "./Area";
import { Casas } from "./Casas/Casas";
import { Edificio} from "./Edificios/Edificio";
import { Industria} from "./Industria/Industria";
import { Casa1} from "./Casas/casa1"; 
import { Edificio1 } from "./Edificios/Edificio1";

let cidade = new Cidade();

/*------------------
--------------------*/

let casas = new Area(Casas,1000);
let edificio = new Area(Edificio,5000);
//let industria = new Area(Industria,10000);

/*------------------
--------------------*/

let casa1 = new Casa1();
casa1.setNome("casa1");
casa1.setTamanho(500);

let casa2 = new Casa1();
casa2.setNome("casa2");
casa2.setTamanho(600);

let casa3 = new Casa1();
casa2.setNome("casa3");
casa2.setTamanho(200);

let edificio1 = new Edificio1();
edificio1.setNome("ed1");
edificio1.setTamanho(4000);


let edificio2 = new Edificio1();
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


