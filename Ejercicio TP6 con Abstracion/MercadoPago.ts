import { IPago } from "./IPago";
import { Pago } from "./Pago";

export class MercadoPago extends Pago {
    
    private aliasDestino: string;

    constructor(pImporte: number, pFechaDePago: string, pAliasDestino: string) {
        super(pImporte, pFechaDePago)
        this.aliasDestino = pAliasDestino;
    }

    public getAliasDestino(): string {
        return this.aliasDestino;
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