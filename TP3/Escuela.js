"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/
var Alumno_1 = require("./Alumno");
var Maestro_1 = require("./Maestro");
var Escuela = /** @class */ (function () {
    //CONSTRUCTOR
    function Escuela(pAlumnos, pMaestros) {
        this.alumnos = pAlumnos;
        this.maestros = pMaestros;
    }
    // SETTERS Y GETTERS
    Escuela.prototype.setAlumnos = function (pAlumnos) {
        this.alumnos = pAlumnos;
    };
    Escuela.prototype.setMaestros = function (pMaestros) {
        this.maestros = pMaestros;
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.getMaestros = function () {
        return this.maestros;
    };
    //METODOS ---->  matricular/contratar y expulsar/despedir - Usamos método splice() que cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        this.alumnos.splice(Alumno_1.Alumno.length + 1, 0, pAlumno);
    };
    Escuela.prototype.expulsarAlumno = function (pNroAlumno) {
        var indiceBuscado = this.alumnos.findIndex(function (a) { return a.getNroAlumno() == pNroAlumno; });
        if (indiceBuscado != -1) {
            this.alumnos.splice(indiceBuscado, 1);
        }
    };
    Escuela.prototype.contratarMaestro = function (pMaestro) {
        this.maestros.splice(Maestro_1.Maestro.length + 1, 0, pMaestro);
    };
    Escuela.prototype.despedirMaestro = function (pIndex) {
        this.maestros.splice(pIndex, 1);
    };
    return Escuela;
}());
exports.Escuela = Escuela;
