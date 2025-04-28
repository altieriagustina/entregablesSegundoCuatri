import { Animal } from "./Animal";

export class Gato extends Animal {

    constructor(pAnimalName: string) {
        super(pAnimalName)
    }

    public tipoDeDieta(): void {
        console.log(`La dieta ideal del gato es dos latas de atún al día`);
    }

    public emitirSonido(): void {
        console.log(`¡MIAAAAAUUU!`)
    }

}