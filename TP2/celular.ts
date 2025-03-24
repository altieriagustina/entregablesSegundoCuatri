/*EJERCICIO ENTREGABLE OBLIGATORIO - FECHA MAXIMA DE ENTREGA 26/03/2025
Se debe crear una clase Celular que represente un teléfono móvil.
Requisitos:
Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
Constructor con parámetros opcionales y obligatorios:
Obligatorios: Marca, modelo y sistema operativo.
Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
Métodos adicionales:
encenderApagar(): Cambia el estado de encendido/apagado del celular.
mostrarInfo(): Retorna una cadena con los datos del celular. */

export class Celular {
    private marca: string;
    private modelo: string;
    private sistemaOperativo: string;
    private memoriaRAM: string;
    private almacenamientoInterno: string;
    private estadoDeEncendido: string;

    constructor(pMarca: string, pModelo: string, pSistemaOperativo: string, pMemoriaRAM?: string, pAlmacenamientoInterno?: string, pEstadoDeEncendido?: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRAM = pMemoriaRAM ?? "4GB";
        this.almacenamientoInterno = pAlmacenamientoInterno ?? "64GB";
        this.estadoDeEncendido = pEstadoDeEncendido ?? "apagado";

    }

    public encerderApagar(): void {
        if (this.estadoDeEncendido == "apagado") {
            this.estadoDeEncendido = "encendido"
        } else {
            this.estadoDeEncendido = "apagado";
        }
    }

    public mostrarInfo(): string {
        return `Información del equipo seleccionado:
--> Marca del equipo: ${this.marca}
--> Modelo del equipo: ${this.modelo}
--> Sistema operativo: ${this.sistemaOperativo}
--> MemoriaRAM: ${this.memoriaRAM};
--> Almacenamiento Interno: ${this.almacenamientoInterno};
--> Estado De Encendido: ${this.estadoDeEncendido};
`
    }

    public setMarca(pMarca: string): void {
this.marca = pMarca;
    }

    public getMarca(): string {
        return this.marca
    }
} 