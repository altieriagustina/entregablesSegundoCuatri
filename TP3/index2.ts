/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/

import { Escuela } from "./Escuela";
import { Alumno } from "./Alumno";
import { Maestro } from "./Maestro";

let alumno1: Alumno = new Alumno ("Juan Perez", 125, 9);
let alumno2: Alumno = new Alumno ("Pablo Sanchez", 100, 5);
let alumno3: Alumno = new Alumno ("Martin Gimenez", 105, 6);
let alumno4: Alumno = new Alumno ("Manuel Garcia", 115, 7);

let maestro1:Maestro = new Maestro ("Sandra Perez", 15);
let maestro2:Maestro = new Maestro ("Juana Garcia", 6);
let maestro3:Maestro = new Maestro ("Raul Sanchez", 12);

let alumnosPrimero:Alumno[] = [alumno1, alumno2, alumno3,alumno4];
let maestrosPrimero: Maestro[] = [maestro1, maestro2, maestro3];

maestro1.setAlumnos(alumnosPrimero);

let escuela: Escuela = new Escuela (alumnosPrimero, maestrosPrimero);


// console.log(alumno1.estaAprobado(9));

// let alumno5: Alumno = new Alumno ("Juan Garcia", 116, 4);

// escuela.matricularAlumno(alumno5);

//console.log(alumnosPrimero);

escuela.expulsarAlumno(125);

console.log(alumnosPrimero);

console.log(escuela.getAlumnos());