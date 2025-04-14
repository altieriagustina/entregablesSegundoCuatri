export class Electrodomestico {
    protected marca: string;
    protected modelo: string;
    protected estaEncendido: boolean;

    public constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }

// Getters
public getMarca(): string {
    return this.marca;
}

public getMdelo(): string {
    return this.modelo;
}

public getEstaEncendido(): boolean {
    return this.estaEncendido;
}

// Setters

public setMarca(pMarca: string) {
    this.marca = pMarca;
}

public setModelo(pModelo: string) {
    this.modelo = pModelo;
}

public setEstaEncendido(pEstaEncendido: boolean) {
    this.estaEncendido = pEstaEncendido;
}

// Metodos

public encerder(): void {
    this.estaEncendido == true;
}

public apagar(): void {
    this.estaEncendido == false;
}

public mostrarInfo(): string {
    return `Información del equipo seleccionado:
--> Marca de la heladera: ${this.marca}
--> Modelo de la heladera: ${this.modelo}
--> Estado de Encendido: ${this.estaEncendido}
`
}
 
}