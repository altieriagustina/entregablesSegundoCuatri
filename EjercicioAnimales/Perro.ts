import { Animal } from "./Animal";

export class Perro extends Animal {
    
    constructor(pAnimalName: string){
        super(pAnimalName)
    }

    public tipoDeDieta(): void {
        console.log(`La dieta ideal del perro es dos kilos de carne al día`);
    }

    public emitirSonido(): void {
        console.log(`¡GUAAAAAUUU!`)
    }

}