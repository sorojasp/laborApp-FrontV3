import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CedulaUsuarioService,
  DemandadoService,
  DemandaPdfService,
  UsuariosService,
  DepartamentosMunicipiosService
  } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CedulaUsuarioService,
    DemandadoService,
    DemandaPdfService,
    UsuariosService,
    DepartamentosMunicipiosService
  ]
})
export class ServiceModule { }
