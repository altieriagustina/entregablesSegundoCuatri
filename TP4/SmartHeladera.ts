//Crear una clase SmartHeladera que herede de Heladera y le sume:
//una composición con una clase ModuloWifi

import { Heladera } from "./Heladera"
import { ModuloWifi } from "./ModuloWifi"

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;

    public constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean, pTemperatura: number, pModuloWifi: ModuloWifi) {
        super(pMarca, pModelo, pEstaEncendido, pTemperatura)
        this.moduloWifi = pModuloWifi;
    }

    // Getter

    public getModuloWifi(): ModuloWifi {
        return this.moduloWifi;
    }

    // Setter

    public setModuloWifi(pModuloWifi: ModuloWifi) {
        this.moduloWifi = pModuloWifi;
    }

    // Metodos ----> Simular una conexión online (conectarInternet()) y Mostrar la velocidad de conexión

    public conectarInternet(): void {
        return
    }

    public mostrarVelocidad(): string {
        return `La velocidad de conexión es: ${this.moduloWifi.getVelocidadMbps()}`;
    }
}