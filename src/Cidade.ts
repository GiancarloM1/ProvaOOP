import { Area } from "./Area";
import { Imoveis } from "./Imoveis";

export class Cidade{
    private Area : Array<Area> = [];

    constructor(){
        this.Area = [];
    }

    public addImovel(imovel : Imoveis){
        if(imovel instanceof Imoveis){
            for (let index = 0; index < this.Area.length; index++) {
                const element = this.Area[index];
                if(element.addImovelToArea(imovel)){
                    continue;
                }else{
                    break;
                }
            }
        }
    }

    public addArea(area : Area){
        if(area instanceof Area){
            if(area.getAreaTamanho()>0 && area.getTipo() != ''){
                this.Area.push(area);
                console.log("Area '"+ area.getTipo() + "' adicionada com "+ area.getAreaTamanho() + "m² de tamanho total.")
            }
            else{
                return console.log("Tipo nulo ou tamanho zerado, verifique!");
            }
            
        }
    }

    public listaImoveis(area :any){
        if( area instanceof Area){
            console.log('--------------');
            console.log(area.getTipo());
            area.getListaImovel().forEach(element =>{
                console.log(element.getNome());
            });
        }
    }
                
}