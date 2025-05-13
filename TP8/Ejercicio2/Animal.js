"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pTipo, pSonido, pDesplazamiento, pPatas) {
        this.tipo = pTipo;
        this.sonido = pSonido;
        this.desplazamiento = pDesplazamiento;
        this.patas = pPatas;
    }
    Animal.prototype.hacerSonido = function () {
        console.log("El ".concat(this.tipo, " hace ").concat(this.sonido));
    };
    Animal.prototype.mover = function () {
        console.log("El desplazamiento del ".concat(this.tipo, " es por ").concat(this.desplazamiento, " y tiene ").concat(this.patas, " patas"));
    };
    return Animal;
}());
exports.Animal = Animal;
