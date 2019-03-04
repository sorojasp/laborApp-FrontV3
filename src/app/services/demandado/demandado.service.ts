import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandadoJuridico } from '../../models/DemandadoJuridico';



@Injectable({
  providedIn: 'root'
})
export class DemandadoService {

  private URL_JURIDICA: string = 'https://laborappi.herokuapp.com/api/laborapp/demandado/guardar/empresa';

  constructor(private http: HttpClient) { }


  guardarDemandadoJuridico( demandadoJuridico: DemandadoJuridico ) {

    return this.http.post(this.URL_JURIDICA, demandadoJuridico);

  }


}
