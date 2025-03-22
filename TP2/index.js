"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celular_1 = require("./celular");
var primerCelular = new celular_1.Celular("Iphone", "16 Pro", "IOS", undefined, undefined, "apagado");
var segundoCelular = new celular_1.Celular("Samsung", "S20", "Android", "encendido");
primerCelular.setMarca("Sony");
primerCelular.encerderApagar();
console.log(primerCelular.mostrarInfo());
//console.log(segundoCelular.getMarca());
