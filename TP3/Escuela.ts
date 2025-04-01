/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/
import { Alumno } from "./Alumno";
import { Maestro } from "./Maestro";


export class Escuela {

    //ATRIBUTOS

    private alumnos: Alumno[];
    private maestros: Maestro[];

    //CONSTRUCTOR

    public constructor(pAlumnos: Alumno[], pMaestros: Maestro[]) {
        this.alumnos = pAlumnos;
        this.maestros = pMaestros;
    }

    // SETTERS Y GETTERS

    public setAlumnos(pAlumnos: Alumno[]) {
        this.alumnos = pAlumnos;
    }

    public setMaestros(pMaestros: Maestro[]) {
        this.maestros = pMaestros;
    }


    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public getMaestros(): Maestro[] {
        return this.maestros;
    }

    //METODOS ---->  matricular/contratar y expulsar/despedir - Usamos método splice() que cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

    public matricularAlumno(pAlumno: Alumno):void {
        this.alumnos.splice(Alumno.length + 1, 0, pAlumno);
    }

    public expulsarAlumno(pNroAlumno: number): void {
        const indiceBuscado = this.alumnos.findIndex(a => a.getNroAlumno() == pNroAlumno);
        if (indiceBuscado != -1) {
            this.alumnos.splice(indiceBuscado, 1);
        }
    }

    public contratarMaestro(pMaestro: Maestro):void {
        this.maestros.splice(Maestro.length + 1, 0, pMaestro);
    }

    public despedirMaestro(pNroMaestro: number): void {
        const indiceBuscado = this.maestros.findIndex(m => m.getNroMaestro() == pNroMaestro);
        if (indiceBuscado != -1) {
            this.maestros.splice(indiceBuscado, 1);
        }

    }

}