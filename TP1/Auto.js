"use strict";
// Crear una clase Auto con atributos (marca, modelo, anio).
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    // Agregar métodos (constructor(), acelerar(), frenar()).
    function Auto(pMarca, pModelo, pAño, pVelocidad, pCombustible, pTransmision) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;
        this.velocidad = pVelocidad;
        this.combustible = pCombustible;
        this.transmision = pTransmision;
        this.enMarcha = false;
    }
    Auto.prototype.acelerar = function (pVelocidad) {
        console.log("Se ha acelerado a ".concat(pVelocidad, " kms"));
    };
    Auto.prototype.frenar = function () {
        console.log("El auto ha frenado");
    };
    return Auto;
}());
exports.Auto = Auto;
