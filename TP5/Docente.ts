import { Persona } from "./Persona";
import { Curso } from "./Curso";

export class Docente extends Persona {
    private cursoAsignado: string;

    public constructor(pNombre: string, pApellido: string, pDni: number, pCursoAsignado: string) {
        super(pNombre, pApellido, pDni);
        this.cursoAsignado = pCursoAsignado;
    }

    public getCursoAsignado(): string {
        return this.cursoAsignado;
    }
    public setCursoAsignado(pCursoAsignado: string) {
        this.cursoAsignado = pCursoAsignado;
    }

    // Metodo presentación docente

    public presentacion(): string {
        return `
        PRESENTACION DEL DOCENTE
        ----------------
        Nombre: ${this.getNombre()}
        Apellido: ${this.getApellido()}
        DNI: ${this.getDni()}
        Curso asignado: ${this.getCursoAsignado()}`
    }
}