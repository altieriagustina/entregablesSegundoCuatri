export class Computadora {

    private sistemaOperativo?: string | undefined;
    private procesador?: string | undefined;
    private almacenamiento?: number | undefined;
    private rAM?: number | undefined;
    private tarjetaGráfica?: boolean | undefined;

    constructor(pSistemaOperativo?: string | undefined, pProcesador?: string | undefined, pAlmacenamiento?: number | undefined, pRam?: number | undefined, pTarjetaGrafica?: boolean | undefined) {
        this.sistemaOperativo = pSistemaOperativo;
        this.procesador = pProcesador;
        this.almacenamiento = pAlmacenamiento;
        this.rAM = pRam;
        this.tarjetaGráfica = pTarjetaGrafica;
    }

    public descripcion(): string {
        return `
        Sistema operativo: ${this.sistemaOperativo}
        Procesador: ${this.procesador}
        Almacenamiento: ${this.almacenamiento}
        Memoria RAM: ${this.rAM}
        Tarjeta grafica: ${this.tarjetaGráfica}`
    }
}
