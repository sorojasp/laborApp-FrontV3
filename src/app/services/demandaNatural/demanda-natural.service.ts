import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DemandaPesonaNatural} from '../../models/DemandaPersonaNatural';
import { DemandaPdfService } from '../demanda-pdf/demanda-pdf.service';


@Injectable({
  providedIn: 'root'
})
export class DemandaNaturalService {
   private UrlGuardaDemandaNatural = 'https://back-laborapp.herokuapp.com/api/laborapp/demanda/persona-natural';
  constructor(private http: HttpClient) {}
  guardarDemandaNatural( demandaPersonaNatural: DemandaPesonaNatural) {

    return this.http.post(this.UrlGuardaDemandaNatural, demandaPersonaNatural);
  }

}