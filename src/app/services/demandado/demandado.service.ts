import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../../models/Empresa';



@Injectable({
  providedIn: 'root'
})
export class DemandadoService {

  private URL_JURIDICA  = 'https://back-laborapp.herokuapp.com/api/laborapp/demandado/empresa';

  constructor(private http: HttpClient) { }


  guardarDemandadoJuridico( empresa: Empresa ) {

    return this.http.post(this.URL_JURIDICA, empresa);

  }


}
