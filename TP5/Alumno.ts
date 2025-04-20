import { Persona } from "./Persona";
import { Curso } from "./Curso";

export class Alumno extends Persona {
    private nroDeAlumno: number;
    private asisteAlCurso: string;

    public constructor(pNombre: string, pApellido: string, pDni: number, pNroDeAlumno: number, pAsisteAlCurso: string) {
        super(pNombre, pApellido, pDni);
        this.nroDeAlumno = pNroDeAlumno;
        this.asisteAlCurso = pAsisteAlCurso;

    }

    // Getters

    public getNroAlumno(): number {
        return this.nroDeAlumno;
    }

    public getAsisteAlCurso(): string {
        return this.asisteAlCurso;
    }

    // Setters

    public setNroAlumno(pNroAlumno: number) {
        this.nroDeAlumno = pNroAlumno;
    }

    public setAsisteAlCurso(pAsisteAlCurso: string) {
        this.asisteAlCurso = pAsisteAlCurso;
    }

    // Metodo presentación alumno

    public presentacion(): string {
        return `
        PRESENTACION DEL ALUMNO
        ----------------
        Nombre: ${this.getNombre()}
        Apellido: ${this.getApellido()}
        DNI: ${this.getDni()}
        Numero de alumno: ${this.getDni()}
        Curso al que asiste: ${this.getAsisteAlCurso()}`
    }

}