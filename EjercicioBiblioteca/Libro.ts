export class Libro {
    private nroReferencia: number;
    private titulo: string;
    private autor: string;
    private estaDisponible: boolean;

    constructor(pNroReferencia: number, pTitulo: string, pAutor: string, pEstaDisponibñe: boolean) {
        this.nroReferencia = pNroReferencia;
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.estaDisponible = pEstaDisponibñe;
    }

    //GETTERS
    public getNroReferencia(): number {
        return this.nroReferencia;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }
    
    public getEstaDisponible(): boolean {
        return this.estaDisponible;
    }

    //SETTERS
    public setNroReferencia(pNroReferencia: number) {
        this.nroReferencia = pNroReferencia;
    }

    public setTitulo(pTitulo: string) {
        this.titulo = pTitulo;
    }

    public setAutor(pAutor: string) {
        this.autor = pAutor;
    }
    
    public setEstaDisponible(pEstaDisponibñe: boolean) {
        this.estaDisponible = pEstaDisponibñe;
    }
}