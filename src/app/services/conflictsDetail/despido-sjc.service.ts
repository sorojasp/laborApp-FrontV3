import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConflictoDespidoSJC} from '../../models/ConflictoDespidoSJC';

@Injectable({
  providedIn: 'root'
})
export class DespidoSJCService {
// private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
private UrlPrueba =  'http://localhost:3000/LaborApp/PruebaGuardardetalleConflictoDSJC';
constructor(private http: HttpClient) {}
guardarConflictoDSJC(conflictoDespidoSJC: ConflictoDespidoSJC) {

  return this.http.post(this.UrlPrueba, conflictoDespidoSJC);
}

}
