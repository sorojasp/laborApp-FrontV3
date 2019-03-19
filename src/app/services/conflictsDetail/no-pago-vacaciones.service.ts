import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConflictoVacaciones} from '../../models/ConflictoVacaciones';


@Injectable({
  providedIn: 'root'
})
export class NoPagoVacacionesService {

 // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
 private UrlPrueba =  'http://localhost:3000/LaborApp/PruebaGuardarConflictoPagoVacaciones';
 constructor(private http: HttpClient) {}
 guardarDataConfVaca(conflictoVacaciones: ConflictoVacaciones) {

   return this.http.post(this.UrlPrueba, conflictoVacaciones);
 }
}
