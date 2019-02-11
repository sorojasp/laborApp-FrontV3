import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandaPdfService {

  constructor(private http: HttpClient) { }

  private URL = 'https://laborappi.herokuapp.com/api/laborapp/demanda';

  generarPdf(nit, cedula) {

    return this.http.get(`${ this.URL }/generar/${ nit }/${ cedula }`);

  }


  enviarPdf(cedula) {

    return this.http.get(`${ this.URL }/enviar/${ cedula }`);

  }

  descargarPdf(cedula){

    return this.http.get(`${ this.URL }/descargar/${ cedula }`, { responseType: 'blob' })

  }



}
