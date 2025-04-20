export class Persona {

    protected nombre: string;
    protected apellido: string;
    protected dNi: number;

    public constructor(pNombre: string, pApellido: string, pDni: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dNi = pDni;
    }

    // Getters

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getDni(): number {
        return this.dNi;
    }

    // Setters

    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }

    public setApellido(pApellido: string) {
        this.apellido = pApellido;
    }

    public setDni(pDni: number) {
        this.dNi = pDni;
    }

    // Metodo presentación persona

    public presentacion(): string {
        return `
        Nombre: ${this.getNombre()}
        Apellido: ${this.getApellido()}
        DNI: ${this.getDni()}`
    }
}