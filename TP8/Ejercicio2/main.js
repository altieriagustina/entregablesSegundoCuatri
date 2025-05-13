"use strict";
/* Ejercicio 2: Fábrica de Animales
Consigna:
Crea una interfaz Animal con métodos hacerSonido() y mover(). Implementa clases como Perro, Gato y Pajaro que utilizen esa interfaz. Luego, crea una fábrica que devuelva instancias de estos animales */
Object.defineProperty(exports, "__esModule", { value: true });
var FabricaDeAnimales_1 = require("./FabricaDeAnimales");
var fabrica = new FabricaDeAnimales_1.FabricaDeAnimales();
var miGato = fabrica.crearAnimal("Gato", { tipo: "Gato", sonido: "Miau", desplazamiento: "tierra", patas: 4 });
var miPerro = fabrica.crearAnimal("Perro", { tipo: "Perro", sonido: "Guau", desplazamiento: "tierra", patas: 4 });
var miPajaro = fabrica.crearAnimal("Pajaro", { tipo: "Pajaro", sonido: "Pi Pi Pi", desplazamiento: "aire", patas: 2 });
console.log(miGato);
miGato.hacerSonido();
miGato.mover();
console.log(miPerro);
miPerro.hacerSonido();
miPerro.mover();
console.log(miPajaro);
miPajaro.hacerSonido();
miPajaro.mover();
try {
    var miLoro = fabrica.crearAnimal("Loro", { tipo: "Loro", sonido: "Hola Hola", desplazamiento: "aire", patas: 2 });
    console.log(miLoro);
    miLoro.hacerSonido();
    miLoro.mover();
}
catch (error) {
    console.log(error.name + " " + error.message); // En mi consola no funcionó esto pero está hecho tal cual se hizo en clase
}
