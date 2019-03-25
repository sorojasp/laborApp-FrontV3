import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DemandaEmpresa} from '../../models/DemandaEmpresa';

@Injectable({
  providedIn: 'root'
})
export class DemandaJuridicaService {

  private UrlGuardaDemandaEmpresa = 'https://back-laborapp.herokuapp.com/api/laborapp/demanda/empresa';
  constructor(private http: HttpClient) {}
  guardarDemandaNatural( demandaEmpresa: DemandaEmpresa) {

    return this.http.post(this.UrlGuardaDemandaEmpresa, demandaEmpresa);
  }

}
