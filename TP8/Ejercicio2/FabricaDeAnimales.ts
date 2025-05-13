import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { IAnimal } from "./IAnimal";
import { Pajaro } from "./Pajaro";
import { Perro } from "./Perro";

export class FabricaDeAnimales {
    public crearAnimal(tipo: string, atributos: any): Animal {
        if (tipo === "Gato") {
            return new Gato(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas)
        } else if (tipo === "Perro") {
            return new Perro(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas)
        } else if(tipo === "Pajaro"){
            return new Pajaro(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas)
        } else {
            throw new Error("Animal inexistente");
        }
    }
}

