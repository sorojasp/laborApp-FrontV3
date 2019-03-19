export interface ConflictoVacaciones {
idConflictoVacaciones: number;
fechaInicioContrato: Date;
fechaFinalContrato?: Date;
fechaUltimasVacaciones: Date;
fechaFinalNoPagoVacaciones?: Date;
montoDinero_Vacaciones?: number;
idDemandaPersonaNatural?: number;
idDemandaEmpresa?: number;
}