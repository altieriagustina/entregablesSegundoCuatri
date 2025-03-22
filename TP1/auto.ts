// Crear una clase Auto con atributos (marca, modelo, anio).

export class Auto {
    marca: string;
    modelo: string;
    año: number;
    velocidad: number;
    combustible: string;
    transmision: string;
    enMarcha: boolean;
    
    // Agregar métodos (constructor(), acelerar(), frenar()).

    constructor(pMarca: string, pModelo: string, pAño: number, pVelocidad: number, pCombustible: string, pTransmision: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;
        this.velocidad = pVelocidad;
        this.combustible = pCombustible;
        this.transmision = pTransmision;
        this.enMarcha = false;
    }

    acelerar(pVelocidad: number): void {
        console.log(`Se ha acelerado a ${pVelocidad} kms`);
    }

    frenar(): void {
        console.log(`El auto ha frenado`);
    }
} 