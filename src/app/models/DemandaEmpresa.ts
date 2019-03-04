export interface DemandaEmpresa {
idDemandaEmpresa: number;
fechaDemandaEmpresa: Date;
codigoCiudad: number;
tipoDocumentoPersona: string;
numeroDocumentoPersona: string;
NItEmpresa: number;
idContrato: number;
fechaPropuestaRadicacionDemandaEmpresa?: Date;
fecharRealRadicacionDemandaEmpresa?: Date;
fechaPropuestaRadicacionDerechoPetiEmpresa?: Date;
fecharRealRadicacionDerechoPetiEmpresa?: Date;
informeDesicionFinalDemandaEmpresa?: string;
respuestaFinalDemandaEmpresa?: boolean;
}