import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaNatural } from '../../models/PersonaNatural';


@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {

  private urlPersonaNatural = 'https://back-laborapp.herokuapp.com/api/laborapp/demandado/persona-natural';

  constructor(private http: HttpClient) { }

  guardarPersonaNatural (PersonaNatural_: any) {
    return this.http.post(this.urlPersonaNatural, PersonaNatural_);

  }



}
