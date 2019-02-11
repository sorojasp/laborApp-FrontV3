import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepartamentosMunicipiosService {


  private URL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';


  constructor(private http: HttpClient) { }



  getMunicipios(){
    return this.http.get(`${ this.URL }`);
  }



}
