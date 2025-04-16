import { Electrodomestico } from "./Electrodomestico"

export class Heladera extends Electrodomestico {
    protected temperatura: number;
    
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

    public encerderHeladera(): void {
        this.estaEncendido = false ? this.estaEncendido == true : this.estaEncendido == false;
    }

    public apagarHeladera(): void {
        this.estaEncendido = true ? this.estaEncendido == false : this.estaEncendido == true;
    }

    public cambiarTemperatura(nuevaTemp: number): void {
        this.temperatura = nuevaTemp;
    }

    public mostrarEncendido(): string {
        return this.estaEncendido == true ? `Heladera encendida` : `Heladera apagada`;
    }
}