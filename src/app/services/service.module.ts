import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  DemandadoService,
  DemandaPdfService,
  UsuariosService,
  DepartamentosMunicipiosService,
  LoginGuard,
  VerificarTokenGuard,
  ContratoService,

  } from './service.index';
import { EmpresaService } from './Empresa/empresa.service';

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
    ContratoService,
    EmpresaService
  ]
})
export class ServiceModule { }
