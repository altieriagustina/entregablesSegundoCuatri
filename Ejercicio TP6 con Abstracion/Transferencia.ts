import { IPago } from "./IPago";
import { Pago } from "./Pago";

export class Transferencia extends Pago {
    
    private cuentaDestino: string;

    constructor(pImporte: number, pFechaDePago: string, pCuentaDestino: string) {
        super(pImporte, pFechaDePago);
        this.cuentaDestino = pCuentaDestino;
    }

    public getCuentaDestino(): string {
        return this.cuentaDestino;
    }

    public setCuentaDestino(pCuentaDestino: string) {
        this.cuentaDestino = pCuentaDestino;
    }

    public procesarPago(): void {
        console.log(`Se está procesando su pago por $${this.importe}`)
    };

    public cancelarPago(): void {
        console.log(`Su transferencia con destino a la cuenta ${this.cuentaDestino} no se pudo procesar y ha sido cancelada`)
    };

    public generarRecibo(): void {
        console.log(`
            Fecha: ${this.fechaDePago}
            Número de comprobante: ${Math.floor(Math.random() * 1000)}
            Cuenta destino: ${this.cuentaDestino}
            Importe de la tranferencia efectuada: $${this.importe}`)
    };
}