import { ConflictoPagoSalario } from '../../models/ConflictoPagoSalario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NoPagoSalarioService {

// private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
private UrlPrueba =  'http://localhost:3000/LaborApp/PruebaGuardarDetalleConflictoNoPagoSalario';
constructor(private http: HttpClient) {}

guardarNoPagoSalario(conflictoPagoSalario: ConflictoPagoSalario): any {

  return this.http.post(this.UrlPrueba, conflictoPagoSalario);
}

}
