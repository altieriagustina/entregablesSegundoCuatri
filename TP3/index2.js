"use strict";
/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Escuela_1 = require("./Escuela");
var Alumno_1 = require("./Alumno");
var Maestro_1 = require("./Maestro");
var alumno1 = new Alumno_1.Alumno("Juan Perez", 125, 9);
var alumno2 = new Alumno_1.Alumno("Pablo Sanchez", 100, 5);
var alumno3 = new Alumno_1.Alumno("Martin Gimenez", 105, 6);
var alumno4 = new Alumno_1.Alumno("Manuel Garcia", 115, 7);
var maestro1 = new Maestro_1.Maestro("Sandra Perez", 15);
var maestro2 = new Maestro_1.Maestro("Juana Garcia", 6);
var maestro3 = new Maestro_1.Maestro("Raul Sanchez", 12);
var alumnosPrimero = [alumno1, alumno2, alumno3, alumno4];
var maestrosPrimero = [maestro1, maestro2, maestro3];
maestro1.setAlumnos(alumnosPrimero);
var escuela = new Escuela_1.Escuela(alumnosPrimero, maestrosPrimero);
// console.log(alumno1.estaAprobado(9));
// let alumno5: Alumno = new Alumno ("Juan Garcia", 116, 4);
// escuela.matricularAlumno(alumno5);
//console.log(alumnosPrimero);
escuela.expulsarAlumno(125);
console.log(alumnosPrimero);
console.log(escuela.getAlumnos());
