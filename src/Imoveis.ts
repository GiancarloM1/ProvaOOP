export class Imoveis{
    private nome : string;
    private tamanho : number;

    constructor(){
        this.nome = '';
        this.tamanho = 0;
    }
    public getNome() : any {
        return this.nome;
    }
    public setNome(nome : any) {
        if(nome != ''){
            this.nome = nome;
        }
    }
    public getTamanho() : number{
        return this.tamanho;
    }
    public setTamanho(tamanho : number){
        if(tamanho > 0 ){
            this.tamanho = tamanho;
        }
    }

}