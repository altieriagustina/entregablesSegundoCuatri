import { IPago } from "./IPago";

export class MercadoPago implements IPago {
    private importe: number;
    private fechaDePago: string;
    private aliasDestino: string;

    constructor(pImporte: number, pFechaDePago: string, pAliasDestino: string) {
        this.importe = pImporte;
        this.fechaDePago = pFechaDePago;
        this.aliasDestino = pAliasDestino;
    }

    public getImporte(): number {
        return this.importe;
    }

    public getFechaDePago(): string {
        return this.fechaDePago;
    }

    public getAliasDestino(): string {
        return this.aliasDestino;
    }

    public setImporte(pImporte: number) {
        this.importe = pImporte;
    }

    public setFechaDePago(pFechaDePago: string) {
        this.fechaDePago = pFechaDePago;
    }

    public setAliasDestino(pAliasDestino: string) {
        this.aliasDestino = pAliasDestino;
    }

    public procesarPago(): void {
        console.log(`Se está procesando un pago recibido por $${this.importe}`)
    };

    public cancelarPago(): void {
        console.log(`Su pago por el importe $${this.importe} no se pudo procesar y ha sido cancelado`)
    };

    public generarRecibo(): void {
        console.log(`
            Se ha generado el recibo de la operación Nro. ${Math.floor(Math.random() * 1000)},  
            por el pago de $${this.importe} abonado a ${this.aliasDestino}, 
            con fecha ${this.fechaDePago}
        
            -------> DESCARCARGAR ACÁ <-------`)
    };
}