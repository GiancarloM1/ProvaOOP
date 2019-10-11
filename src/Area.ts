import { Imoveis } from "./Imoveis";

export class Area{
    private tipo : any;
    private areaTamanhoSobrando : any;
    private areaTamanhoTotal : number;
    private imovel : Array<Imoveis> = [];

    constructor(tipo : any, areaTamanhoTotal : number){
        this.tipo = tipo;
        this.areaTamanhoTotal = areaTamanhoTotal;
        this.areaTamanhoSobrando = this.areaTamanhoTotal;
        this.imovel = [];
        console.log(tipo);
    }

    public getListaImovel() : Array<Imoveis> {
        return this.imovel;
    }

    public addImovelToArea(imovel : Imoveis){

        if(imovel == null || imovel == undefined){
            return false;
        }
        console.log(imovel.getTamanho())
        if(imovel instanceof this.tipo && (this.areaTamanhoSobrando >= imovel.getTamanho())){
            console.log("Imovel '" +imovel.getNome() + "' adicionado com sucesso")
            this.imovel.push(imovel);
            this.areaTamanhoSobrando = this.areaTamanhoSobrando - imovel.getTamanho();
            console.log(this.areaTamanhoSobrando + "sobrando na area" + this.tipo);
            return false;
        }
        else{
            console.log("Tamanho do imovel '"+ imovel.getNome() + "' ultrapassa o disponivel na area!!")
            return true;
        }

    }
    public getAreaTamanho() : number{
        return this.areaTamanhoTotal;
    }
    public getTipo() : any{
        return this.tipo;
    }
}