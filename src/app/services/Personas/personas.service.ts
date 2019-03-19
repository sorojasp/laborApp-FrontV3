import { Injectable } from '@angular/core';
import { Persona } from '../../models/Persona';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

   // private UrlGuardaDatosPersona = 'https://laborappi.herokuapp.com/api/laborapp/demandado/empresa';
   private UrlGuardaDatosPersona =  'https://back-laborapp.herokuapp.com/api/laborapp/persona';

  constructor(private http: HttpClient) { }

  guardarPersona(persona: Persona) {

    return this.http.post(this.UrlGuardaDatosPersona, persona);
  }


}
