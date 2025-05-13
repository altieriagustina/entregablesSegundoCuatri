/* Ejercicio 1: Construcción de Computadoras
Consigna:
Crea una clase Computadora que tenga los siguientes atributos opcionales:
Procesador
RAM
Almacenamiento
Tarjeta gráfica
Sistema operativo
Implementa un patrón Builder que permita a los usuarios construir una computadora personalizada paso a paso. */

import { CompuBuilder } from "./CompuBuilder";
import { Computadora } from "./Computadora";

// Valores en orden
const nuevaPc = new CompuBuilder().setSistemaOperativo(`Windows`).setProcesador(`Intel`).setAlmacenamiento(1).setRAM(32).setTarjetaGráfica(true).build();

// Valores desordenados
const nuevaPc1 = new CompuBuilder().setRAM(32).setProcesador(`Intel`).setAlmacenamiento(1).setSistemaOperativo(`Mac`).setTarjetaGráfica(true).build();

//Solo algunos valores
const nuevaPc2 = new CompuBuilder().setSistemaOperativo(`Linux`).setAlmacenamiento(500).build();

console.log(nuevaPc.descripcion());
console.log(nuevaPc1.descripcion())
console.log(nuevaPc2.descripcion())