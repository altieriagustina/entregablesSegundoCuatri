//Crear una clase SmartHeladera que herede de Heladera y le sume:
//una composición con una clase ModuloWifi

import { Heladera } from "./Heladera"
import { ModuloWifi } from "./ModuloWifi"

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;
    private estaConectada: boolean;

    public constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean, pTemperatura: number, pModuloWifi: ModuloWifi, pEstaConectada: boolean) {
        super(pMarca, pModelo, pEstaEncendido, pTemperatura)
        this.moduloWifi = pModuloWifi;
        this.estaConectada = pEstaConectada;
    }

    // Getter

    public getModuloWifi(): ModuloWifi {
        return this.moduloWifi;
    }
    public getEstaConectada(): boolean {
        return this.estaConectada;
    }

    // Setter

    public setModuloWifi(pModuloWifi: ModuloWifi) {
        this.moduloWifi = pModuloWifi;
    }
    public setEstaConectada(pEstaConectada: boolean) {
        this.estaConectada = pEstaConectada;
    }

    // Metodos ----> Simular una conexión online (conectarInternet()) y Mostrar la velocidad de conexión

    public conectarInternet(): void {
        if (this.estaConectada == false) {
            this.estaConectada = true
        } else {
            console.log(`La heladera ya etá conectada a internet`);
        }
    }

    public mostrarConexion(): string {
        return this.estaConectada == true ? `Heladera conectada` : `Heladera desconectada`;
    }

    public mostrarVelocidad(): string {
        return `La velocidad de conexión es: ${this.moduloWifi.getVelocidadMbps()}`;
    }

    public mostrarInfo(): string {
        return `Información del equipo seleccionado:
    --> Marca de la heladera: ${this.marca}
    --> Modelo de la heladera: ${this.modelo}
    --> Estado de Encendido: ${this.mostrarEncendido()}
    --> Temperatura: ${this.temperatura}
    --> Estado conexion: ${this.mostrarConexion()}
    --> Velocidad de conexion: ${this.mostrarVelocidad()}`
    }
}