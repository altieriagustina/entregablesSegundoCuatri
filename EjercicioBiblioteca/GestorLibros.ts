import { Libro } from "./Libro";
import * as rs from "readline-sync"

export class GestorLibros {
    private libros: Libro[];

    constructor(pLibros: Libro[]) {
        this.libros = pLibros;
    }

    getLibros(): Libro[] {
        return this.libros;
    }

    setLibros(pLibros: Libro[]) {
        this.libros = pLibros;
    }

    //METODOS INSERTAR, CONSULTAR, MODIFICAR, ELIMINAR

    public insertarLibro(pLibro: Libro): void {
this.libros.push(pLibro);
    }
}