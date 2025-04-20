import { Alumno } from "./Alumno";
import { Docente } from "./Docente";

export class Curso {
    private nombreDelCurso: string;
    protected alumnos: Alumno[];
    private docente: Docente;

    public constructor(pNombreDelCurso: string, pAlumnos: Alumno[], pDocente: Docente) {
        this.nombreDelCurso = pNombreDelCurso;
        this.alumnos = pAlumnos;
        this.docente = pDocente;
    }

    // Getters

    public getNombreDelCurso(): string {
        return this.nombreDelCurso;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }
    public getDocente(): Docente {
        return this.docente;
    }

    // Setters

    public setNombreDelCurso(pNombreDelCurso: string) {
        this.nombreDelCurso = pNombreDelCurso;
    }

    public setAlumnos(pAlumnos: Alumno[]) {
        this.alumnos = pAlumnos;
    }

    public setDocente(pDocente: Docente) {
        this.docente = pDocente;
    }

    // Metodo presentación curso

    public presentacion(): string {

        const presentacionesAlumnos = this.alumnos.map((a, index) => `
        
        Alumno Nro. ${index + 1} 
        ${a.presentacion()}`);

        return `
        INFORMACION DEL CURSO
        ----------------
        Nombre del curso: ${this.getNombreDelCurso()}
        ${presentacionesAlumnos}
        ${this.getDocente().presentacion()}
        `
    }
}
