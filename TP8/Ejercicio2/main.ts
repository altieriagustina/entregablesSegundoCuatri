/* Ejercicio 2: Fábrica de Animales
Consigna:
Crea una interfaz Animal con métodos hacerSonido() y mover(). Implementa clases como Perro, Gato y Pajaro que utilizen esa interfaz. Luego, crea una fábrica que devuelva instancias de estos animales */

import { FabricaDeAnimales } from "./FabricaDeAnimales";

const fabrica = new FabricaDeAnimales();

const miGato = fabrica.crearAnimal(`Gato`, { tipo: `Gato`, sonido: `Miau`, desplazamiento: `tierra`, patas: 4 });
const miPerro = fabrica.crearAnimal(`Perro`, { tipo: `Perro`, sonido: `Guau`, desplazamiento: `tierra`, patas: 4 })
const miPajaro = fabrica.crearAnimal(`Pajaro`, { tipo: `Pajaro`, sonido: `Pi Pi Pi`, desplazamiento: `aire`, patas: 2 })

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
    const miLoro = fabrica.crearAnimal(`Loro`, { tipo: `Loro`, sonido: `Hola Hola`, desplazamiento: `aire`, patas: 2 })
    console.log(miLoro);
    miLoro.hacerSonido();
    miLoro.mover();
} catch (error) {
    console.log(error.name + " " + error.message);
}