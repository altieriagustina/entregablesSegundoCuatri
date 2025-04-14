import { Electrodomestico } from "./Electrodomestico"

export class Heladera extends Electrodomestico {
    private temperatura: number;
    
    public constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean, pTemperatura: number) {
        super(pMarca, pModelo, pEstaEncendido);
        this.temperatura = pTemperatura;
    }
    
    // Getter
    
    public getTemperatura(): number {
        return this.temperatura;
    }
    
    // Setter
    
    public setTemperatura(pTemperatura: number): void {
        this.temperatura = pTemperatura;
    }

    // Metodo

    public cambiarTemperatura(nuevaTemp: number): void {
        this.temperatura = nuevaTemp;
    }

}