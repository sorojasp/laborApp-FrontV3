import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratoLaboral } from '../../models/ContratoLaboral';

@Injectable({
  providedIn: 'root'
})
export class ContratoLaboralService {
  // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
  private UrlPruebaContratoLaboral =  'http://localhost:3000/LaborApp/PruebaGuardarContratoLaboral';
  constructor(private http: HttpClient) {}
  guardarContratoLaboral(contratoLaboral: ContratoLaboral) {

    return this.http.post(this.UrlPruebaContratoLaboral, contratoLaboral);
  }

}