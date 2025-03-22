import { Auto } from "./auto";

// Instanciar objetos y probar métodos.

let autoUno = new Auto("Fiat", "Toro", 2016, 40, "Diesel", "Manual");
let autoDos = new Auto("Toyota", "Yaris", 2023, 0, "Nafta", "Automatica");

console.log(autoUno);

autoDos.acelerar(50);

autoUno.frenar();
