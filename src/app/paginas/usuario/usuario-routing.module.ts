import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactarAbogadoComponent } from './contactar-abogado/contactar-abogado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DatosDemandadoComponent } from './generar-demanda/datos-demandado/datos-demandado.component';
import { DatosContratoComponent } from './generar-demanda/datos-contrato/datos-contrato.component';
import { SeleccionConflictosComponent } from './generar-demanda/seleccion-conflictos/seleccion-conflictos.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  {

    path: 'generar',
    children: [

      { path: 'datos-demandado', component: DatosDemandadoComponent },
      { path: 'datos-contrato', component: DatosContratoComponent },
      { path:  'seleccion-conflictos', component: SeleccionConflictosComponent},
      { path: '', redirectTo: 'datos-demandado', pathMatch: 'full' },

    ]

  },
  { path: 'contactar-abogado', component: ContactarAbogadoComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full'}, // A las rutas vacias la direcciona a esta
   { path: '**', redirectTo: 'home', pathMatch: 'full'} // A todas las rutas la direcciona a esta

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
