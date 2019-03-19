import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConflictoPrimas} from '../../models/ConflictoPrimas';

@Injectable({
  providedIn: 'root'
})
export class NoPagoPrimaService {
// private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
private UrlPrueba =  'http://localhost:3000/LaborApp/PruebaGuardarConflictoPrimas';
constructor(private http: HttpClient) {}
guardarPrimaData(conflictoPrimas: ConflictoPrimas) {

  return this.http.post(this.UrlPrueba, conflictoPrimas);
}
}
