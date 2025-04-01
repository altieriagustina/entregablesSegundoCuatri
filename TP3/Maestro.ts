/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/

import { Alumno } from "./Alumno";

export class Maestro {

    //ATRIBUTOS

    private nombre: string;
    private nroMaestro: number;
    private alumnos: Alumno[];

    //CONSTRUCTOR

    public constructor(pNombre: string, pNroMaestro: number) {
        this.nombre = pNombre;
        this.nroMaestro = pNroMaestro;
    }

    // SETTERS Y GETTERS

    public setNombre(pNombre: string) {
        this.nombre = pNombre;
    }

    public setNroMaestro(pNroMaestro: number) {
        this.nroMaestro = pNroMaestro;
    }
    
    public setAlumnos(pAlumnos: Alumno[]) {
        this.alumnos = pAlumnos;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getNroMaestro(): number {
        return this.nroMaestro;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }
}