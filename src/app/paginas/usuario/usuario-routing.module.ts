import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactarAbogadoComponent } from './contactar-abogado/contactar-abogado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DatosDemandadoComponent } from './generar-demanda/datos-demandado/datos-demandado.component';
import { DatosContratoComponent } from './generar-demanda/datos-contrato/datos-contrato.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  {

    path: 'generar',
    children:[

      { path: 'datos-demandado', component: DatosDemandadoComponent },
      { path: 'datos-contrato', component: DatosContratoComponent },
      { path: '', redirectTo: 'datos-demandado', pathMatch: 'full' },

    ]

  },
  { path: 'contactar-abogado', component: ContactarAbogadoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
