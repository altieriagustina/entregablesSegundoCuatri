import { Computadora } from "./Computadora";

export class CompuBuilder {
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


    // Setters
    public setSistemaOperativo(pSistemaOperativo: string | undefined): CompuBuilder {
        this.sistemaOperativo = pSistemaOperativo;
        return this
    }

    public setProcesador(pProcesador: string | undefined): CompuBuilder {
        this.procesador = pProcesador;
        return this
    }

    public setAlmacenamiento(pAlmacenamiento: number | undefined): CompuBuilder {
        this.almacenamiento = pAlmacenamiento;
        return this
    }

    public setRAM(pRam: number | undefined): CompuBuilder {
        this.rAM = pRam;
        return this
    }

    public setTarjetaGráfica(pTarjetaGrafica: boolean | undefined): CompuBuilder {
        this.tarjetaGráfica = pTarjetaGrafica;
        return this
    }

    public build(): Computadora {
        return new Computadora(this.sistemaOperativo, this.procesador, this.almacenamiento, this.rAM, this.tarjetaGráfica)
    }
}