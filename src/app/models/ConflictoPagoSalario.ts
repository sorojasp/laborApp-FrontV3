export interface ConflictoPagoSalario {
idConflictoPagoSalario: number;
fechaInicioContrato: Date;
fechaInicioNoPago: Date;
fechaFinalNoPagoSalario?: Date;
fechaFinalContrato?: Date;
montoDinero_PagoSalario?: number;
idDemandaPersonaNatural?: number;
idDemandaEmpresa?: number;

}