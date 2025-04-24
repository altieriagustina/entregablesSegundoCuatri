import { Transferencia } from "./Transferencia";
import { MercadoPago } from "./MercadoPago";

const pagoMP : MercadoPago = new MercadoPago(20500, `20/04/2025`, `gato.mosquito.mani`);

const pagoTranf : Transferencia = new Transferencia(45000, `22/04/2025`, `CBU 1234567896547896541233`);

pagoMP.procesarPago();

pagoTranf.generarRecibo();

pagoMP.generarRecibo();

pagoTranf.cancelarPago();
