"use strict";
/*EJERCICIO ENTREGABLE OBLIGATORIO - FECHA MAXIMA DE ENTREGA 26/03/2025
Se debe crear una clase Celular que represente un teléfono móvil.
Requisitos:
Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
Constructor con parámetros opcionales y obligatorios:
Obligatorios: Marca, modelo y sistema operativo.
Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
Métodos adicionales:
encenderApagar(): Cambia el estado de encendido/apagado del celular.
mostrarInfo(): Retorna una cadena con los datos del celular. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pSistemaOperativo, pMemoriaRAM, pAlmacenamientoInterno, pEstadoDeEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRAM = pMemoriaRAM !== null && pMemoriaRAM !== void 0 ? pMemoriaRAM : "4GB";
        this.almacenamientoInterno = pAlmacenamientoInterno !== null && pAlmacenamientoInterno !== void 0 ? pAlmacenamientoInterno : "64GB";
        this.estadoDeEncendido = pEstadoDeEncendido !== null && pEstadoDeEncendido !== void 0 ? pEstadoDeEncendido : "apagado";
    }
    Celular.prototype.encerderApagar = function () {
        if (this.estadoDeEncendido == "apagado") {
            this.estadoDeEncendido = "encendido";
        }
        else {
            this.estadoDeEncendido = "apagado";
        }
    };
    Celular.prototype.mostrarInfo = function () {
        return "Informaci\u00F3n del equipo seleccionado:\n--> Marca del equipo: ".concat(this.marca, "\n--> Modelo del equipo: ").concat(this.modelo, "\n--> Sistema operativo: ").concat(this.sistemaOperativo, "\n--> MemoriaRAM: ").concat(this.memoriaRAM, ";\n--> Almacenamiento Interno: ").concat(this.almacenamientoInterno, ";\n--> Estado De Encendido: ").concat(this.estadoDeEncendido, ";\n");
    };
    Celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Celular.prototype.getMarca = function () {
        return this.marca;
    };
    return Celular;
}());
exports.Celular = Celular;
