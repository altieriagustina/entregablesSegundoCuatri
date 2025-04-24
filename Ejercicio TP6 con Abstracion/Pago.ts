import { IPago } from "./IPago";

export abstract class Pago implements IPago {
    protected importe: number;
    protected fechaDePago: string;

    constructor(pImporte: number, pFechaDePago: string) {
        this.importe = pImporte;
        this.fechaDePago = pFechaDePago;
    }

    public getImporte(): number {
        return this.importe;
    }

    public getFechaDePago(): string {
        return this.fechaDePago;
    }

    public setImporte(pImporte: number) {
        this.importe = pImporte;
    }

    public setFechaDePago(pFechaDePago: string) {
        this.fechaDePago = pFechaDePago;
    }

    abstract procesarPago(): void;

    abstract cancelarPago(): void;

    abstract generarRecibo(): void;
}