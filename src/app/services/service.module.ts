import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  DemandadoService,
  DemandaPdfService,
  UsuariosService,
  DepartamentosMunicipiosService,
  LoginGuard,
  VerificarTokenGuard
  } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DemandadoService,
    DemandaPdfService,
    UsuariosService,
    DepartamentosMunicipiosService,
    LoginGuard,
    VerificarTokenGuard,
  ]
})
export class ServiceModule { }
