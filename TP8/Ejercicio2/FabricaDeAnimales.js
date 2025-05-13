"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeAnimales = void 0;
var Gato_1 = require("./Gato");
var Pajaro_1 = require("./Pajaro");
var Perro_1 = require("./Perro");
var FabricaDeAnimales = /** @class */ (function () {
    function FabricaDeAnimales() {
    }
    FabricaDeAnimales.prototype.crearAnimal = function (tipo, atributos) {
        if (tipo === "Gato") {
            return new Gato_1.Gato(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas);
        }
        else if (tipo === "Perro") {
            return new Perro_1.Perro(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas);
        }
        else if (tipo === "Pajaro") {
            return new Pajaro_1.Pajaro(atributos.tipo, atributos.sonido, atributos.desplazamiento, atributos.patas);
        }
        else {
            throw new Error("Animal inexistente");
        }
    };
    return FabricaDeAnimales;
}());
exports.FabricaDeAnimales = FabricaDeAnimales;
