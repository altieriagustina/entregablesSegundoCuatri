import * as rs from "readline-sync"
import { GestorLibros } from "./GestorLibros"
import { Libro } from "./Libro"

const gL = new GestorLibros([]);

// Paso 1: Pedir datos del libro por teclado
const nroReferencia: number = rs.questionInt(`Ingrese el numero de referemcia: `);
const titulo: string = rs.question(`Ingrese el titulo del libro: `)
const autor: string = rs.question(`Ingrese el nombre del autor: `);

//Paso 2: crear un nuevo libro
const libro1 = new Libro(nroReferencia, titulo, autor, true);


//Paso 3: agregar nuevo libro a Gestor de libros

gL.insertarLibro(libro1);

console.log(gL.getLibros());