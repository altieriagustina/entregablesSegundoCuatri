"use strict";
/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    //CONSTRUCTOR
    function Alumno(pNombre, pNroAlumno, pNota) {
        this.nombre = pNombre;
        this.nroAlumno = pNroAlumno;
        this.nota = pNota;
    }
    // SETTERS Y GETTERS
    Alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Alumno.prototype.setNroAlumno = function (pNroAlumno) {
        this.nroAlumno = pNroAlumno;
    };
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getNroAlumno = function () {
        return this.nroAlumno;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    //METODO ESTÁ APROBADO
    Alumno.prototype.estaAprobado = function (pNota) {
        if (this.nota >= 7) {
            return "El alumno n\u00FAmero ".concat(this.getNroAlumno(), " est\u00E1 Aprobado");
        }
        else {
            return "El alumno n\u00FAmero ".concat(this.getNroAlumno(), " est\u00E1 Desaprobado");
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
