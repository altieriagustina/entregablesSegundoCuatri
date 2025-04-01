/* Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
 Los profesores deben tener un listado de sus alumnos.
Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
*/

export class Alumno {

   //ATRIBUTOS

   private nombre: string;
   private nroAlumno: number;
   private nota: number;

   //CONSTRUCTOR

   public constructor(pNombre: string, pNroAlumno: number, pNota: number) {
      this.nombre = pNombre;
      this.nroAlumno = pNroAlumno;
      this.nota = pNota;

   }
   
    // SETTERS Y GETTERS

   public setNombre(pNombre: string) {
      this.nombre = pNombre;
   }

   public setNroAlumno(pNroAlumno: number) {
      this.nroAlumno = pNroAlumno;
   }

   public setNota(pNota: number) {
      this.nota = pNota;
   }

   public getNombre(): string {
      return this.nombre;
   }

   public getNroAlumno(): number {
      return this.nroAlumno;
   }

   public getNota(): number {
      return this.nota;
   }


   //METODO ESTÁ APROBADO

      public estaAprobado(pNota: number) {
         if (this.nota >= 7) {
             return `El alumno número ${this.getNroAlumno()} está Aprobado`;
         } else {
             return `El alumno número ${this.getNroAlumno()} está Desaprobado`;
         }
     }

}
