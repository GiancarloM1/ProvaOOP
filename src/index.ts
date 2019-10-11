import { Cidade } from "./Cidade";
import { Area } from "./Area";
import { Casas } from "./Casas/Casas";
import { Edificio} from "./Edificios/Edificio";
import { Industria} from "./Industria/Industria";
import { Casa1} from "./Casas/casa1"; 

let cidade = new Cidade();

/*------------------
--------------------*/

let casas = new Area(Casas,1000);
//let edificio = new Area(Edificio,5000);
//let industria = new Area(Industria,10000);

/*------------------
--------------------*/

let casa1 = new Casa1();
casa1.setNome("casa1");
casa1.setTamanho(500);

let casa2 = new Casa1();
casa2.setNome("casa2");
casa2.setTamanho(600);


cidade.addArea(casas);

cidade.addImovel(casa1);
cidade.addImovel(casa2);

cidade.listaImoveis(casas);


