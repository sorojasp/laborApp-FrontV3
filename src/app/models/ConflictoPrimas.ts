export interface ConflictoPrimas {
idConflictoPrima: number;
fechaInicioContrato: Date;
fechaFinalContrato?: Date;
fechaUltimaPrimaPagada?: Date;
fechaFinalNoPagoCesantias?: Date;
montoDinero_Prima?: number;
idDemandaPersonaNatural?: number;
idDemandaEmpresa?: number;
}