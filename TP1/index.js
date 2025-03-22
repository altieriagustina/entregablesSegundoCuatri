"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
// Instanciar objetos y probar métodos.
var autoUno = new Auto_1.Auto("Fiat", "Toro", 2016, 40, "Diesel", "Manual");
var autoDos = new Auto_1.Auto("Toyota", "Yaris", 2023, 0, "Nafta", "Automatica");
console.log(autoUno);
autoDos.acelerar(50);
autoUno.frenar();
