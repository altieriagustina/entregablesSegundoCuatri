import { IAnimal } from "./IAnimal";

export class Animal implements IAnimal{
    private tipo: string;
    private sonido: string;
    private desplazamiento: string;
    private patas: number;

    constructor(pTipo: string, pSonido: string, pDesplazamiento: string, pPatas: number) {
        this.tipo = pTipo;
        this.sonido = pSonido;
        this.desplazamiento = pDesplazamiento;
        this.patas = pPatas;
    }

    public hacerSonido(): void {
        console.log(`El ${this.tipo} hace ${this.sonido}`)
    }

    public mover(): void {
        console.log(`El desplazamiento del ${this.tipo} es por ${this.desplazamiento} y tiene ${this.patas} patas`)
    }
}
