import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConflictoCesantias} from '../../models/ConflictoCesantias';

@Injectable({
  providedIn: 'root'
})
export class NoPagoCesantiasService {

// private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
private UrlPrueba =  'http://localhost:3000/LaborApp/PruebaGuardarConflictoPagoCesantias';
constructor(private http: HttpClient) {}

guardarDataConfCesantias(conflictoCesantias: ConflictoCesantias): any {

  return this.http.post(this.UrlPrueba, conflictoCesantias);
}

}
