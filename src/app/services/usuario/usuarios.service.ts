import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL: any = 'https://laborappi.herokuapp.com/api/laborapp/usuario/guardar';

  constructor(private http: HttpClient) { }

  guardarUsuarios(usuario: Usuario): any {
    return this.http.post(this.URL, usuario);
  }


}
