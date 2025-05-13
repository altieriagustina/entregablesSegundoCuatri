import { Animal } from "./Animal";
import { IAnimal } from "./IAnimal";

export class Pajaro extends Animal {

    constructor(pTipo: string, pSonido: string, pDesplazamiento: string, pPatas: number) {
        super(pTipo, pSonido, pDesplazamiento, pPatas)
    }

}