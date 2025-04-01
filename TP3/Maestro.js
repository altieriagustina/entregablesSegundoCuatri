"use strict";
/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maestro = void 0;
var Maestro = /** @class */ (function () {
    //CONSTRUCTOR
    function Maestro(pNombre, pNroMaestro) {
        this.nombre = pNombre;
        this.nroMaestro = pNroMaestro;
    }
    // SETTERS Y GETTERS
    Maestro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Maestro.prototype.setNroMaestro = function (pNroMaestro) {
        this.nroMaestro = pNroMaestro;
    };
    Maestro.prototype.setAlumnos = function (pAlumnos) {
        this.alumnos = pAlumnos;
    };
    Maestro.prototype.getNombre = function () {
        return this.nombre;
    };
    Maestro.prototype.getNroMaestro = function () {
        return this.nroMaestro;
    };
    Maestro.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    return Maestro;
}());
exports.Maestro = Maestro;
