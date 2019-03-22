import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

getDataUsuario (datoSolicitado) {
const DataUsuario = JSON.parse(localStorage.getItem('usuario'));
switch (datoSolicitado) {
  case 'nombres':
  return DataUsuario.nombresPersona;
  break;
  case 'apellidos':
  return DataUsuario.apellidosPersona;
  break;
  case 'tipoDocumento':
  return DataUsuario.tipoDocumentoPersona;
  break;
  case 'numeroDocumento':
  return DataUsuario.numeroDocumentoPersona;
  break;
  default:
  return 'dato no existente o mal consultado';

}
}

getDataEmpresa (datoSolicitado) {
  const DataEmpresa = JSON.parse(localStorage.getItem('demandadoJuridico'));
  switch (datoSolicitado) {
    case 'nit':
    return DataEmpresa.NItEmpresa;
    break;
    case 'razonSocial':
    return DataEmpresa.nombreEmpresaRS;
    break;
    default:
  return 'dato no existente o mal consultado';
}
}

getDataDemandadoNatural (datoSolicitado) {
  const DataDemandadoNatural = JSON.parse(localStorage.getItem('DemandadoNatural'));
  switch (datoSolicitado) {
    case 'tipoDocumento':
    return DataDemandadoNatural.tipoDocumentoPersona;
    break;

    case 'numeroDocumentoPersona':
    return DataDemandadoNatural.numeroDocumentoPersona;
    break;

    case 'idPersona':
    const numeroString: string = this.getDataDemandadoNatural('numeroDocumentoPersona');
    console.log(`id antes de multiplicación: ${typeof (numeroString)}`);
    let numero: number = parseInt(numeroString, 10);
    console.log(`id después de convertir a int: ${numero}`);
    numero = numero * 100;
    numero = numero + 10;
    console.log(`id de persona Natural: ${numero}`);
    return numero;
    break;

    default:
    return 'dato no existente o mal consultado';

  }

}

setDataInLocalStorage(nombreCampo: string, data: any ) {
  localStorage.setItem(nombreCampo, data);

}

getSeleccionConflicto (): string {
const seleccionDemandado = localStorage.getItem('seleccionDemandado');
return seleccionDemandado;
}




}




