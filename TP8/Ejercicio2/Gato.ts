import { Animal } from "./Animal";

export class Gato extends Animal {

    constructor(pTipo: string, pSonido: string, pDesplazamiento: string, pPatas: number) {
        super(pTipo, pSonido, pDesplazamiento, pPatas)
    }

}