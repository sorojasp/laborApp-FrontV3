import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CedulaUsuarioService {

  public cedula = 0;

  constructor() { }

  guardarCedula(cedula): void {
  this.cedula = cedula;
  }
  obtenerCedual(): any {
    return this.cedula;
  }
  resetCedual(): any {
    this.cedula = undefined;
  }
}
