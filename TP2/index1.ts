import { Celular } from "./celular";

let primerCelular = new Celular("Iphone", "16 Pro", "IOS", undefined, undefined, "apagado");
let segundoCelular = new Celular("Samsung", "S20", "Android", "encendido");

primerCelular.setMarca("Sony");

primerCelular.encenderApagar();

console.log(primerCelular.mostrarInfo());

console.log(segundoCelular.getMarca());


