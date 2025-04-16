import { ModuloWifi } from "./ModuloWifi";
import { SmartHeladera } from "./SmartHeladera";

// Crear una instancia de SmartHeladera
const moduloHeladera = new ModuloWifi(125, 250);

const heladeraSmart = new SmartHeladera("Gafa", "HGF358", false, 5, moduloHeladera, true)

// ENCENDER HELADERA

//heladeraSmart.encenderHeladera();
//console.log(heladeraSmart);

// CAMBIAR TEMPERATURA

//heladeraSmart.cambiarTemperatura(10);
//console.log(heladeraSmart);

// CONECTAR A INTERNET

//heladeraSmart.conectarInternet();
//console.log(heladeraSmart);

// MOSTRAR INFO

//heladeraSmart.mostrarInfo();
console.log(heladeraSmart.mostrarInfo());