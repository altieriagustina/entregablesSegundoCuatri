import { Alumno } from "./Alumno";
import { Docente } from "./Docente";
import { Curso } from "./Curso";

const alumno1 : Alumno = new Alumno(`Agustina`, `Altieri`, 32258207, 22, `pintura`);
const alumno2 : Alumno = new Alumno(`MAria`, `Perez`, 31589745, 10, `fotografia`);
const alumno3 : Alumno = new Alumno(`Juan`, `Gonzalez`, 40895423, 6, `fotografia`);
const alumno4 : Alumno = new Alumno(`Matias`, `Sanchez`, 25789456, 30, `pintura`);
const alumno5 : Alumno = new Alumno(`Martin`, `Perez`, 45123456, 12, `pintura`);

const docente1 : Docente = new Docente(`Martin`, `Perez`, 45123456, `fotografia`);
const docente2 : Docente = new Docente(`Martin`, `Perez`, 45123456, `pintura`);

const cursoPintura : Curso = new Curso(`Pintura`, [alumno1, alumno4, alumno5], docente2);
const cursoFotografia : Curso = new Curso(`Fotografia`, [alumno2, alumno3], docente1);

const listaAlumnos : Alumno[] = [alumno1, alumno2, alumno3, alumno4, alumno5];


//console.log(alumno1.presentacion());

//console.log(docente1.presentacion());

//console.log(cursoPintura.getAlumnos());

//console.log(cursoPintura.presentacion());