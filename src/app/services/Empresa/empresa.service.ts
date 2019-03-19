import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../../models/Empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private UrlGuardaDatosEmpresa = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
  constructor(private http: HttpClient) {}
  guardarEmpresa(empresa: Empresa) {

    return this.http.post(this.UrlGuardaDatosEmpresa, empresa);
  }
}
