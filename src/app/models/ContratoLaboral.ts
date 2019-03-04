export interface ContratoLaboral {

    idContrato: number;
    tipoContrato: string;
    fechaInicioContrato: Date;
    fechaFinalContrato?: Date;
    ultimoSalario: number;
    descripcionFunciones: string;
    tipoDocumentoPersona: string;
    numeroDocumentoPersona: number;
    IdPersonaNatural?: number;
    NItEmpresa?: number;

}