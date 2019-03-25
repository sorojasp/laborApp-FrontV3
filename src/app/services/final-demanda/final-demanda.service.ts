import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FinalDemandaService {
  // private UrlGuardaDatosContatoLaboral = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
  private UrlConflictos =  'https://back-laborapp.herokuapp.com/api/laborapp/conflicto';
  constructor(private http: HttpClient) {}
  guardarTodosConflictos(dataConflictos: any) {
    return this.http.post(this.UrlConflictos, dataConflictos);
  }

}
