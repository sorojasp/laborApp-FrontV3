import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactarAbogadoComponent } from './contactar-abogado/contactar-abogado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DatosDemandadoComponent } from './generar-demanda/datos-demandado/datos-demandado.component';
import { DatosContratoComponent } from './generar-demanda/datos-contrato/datos-contrato.component';
import { SeleccionConflictosComponent } from './generar-demanda/seleccion-conflictos/seleccion-conflictos.component';
import {DespidoComponent} from './generar-demanda/detalleConflictos/despido/despido.component';
import { NPsalarioComponent } from './generar-demanda/detalleConflictos/n-psalario/n-psalario.component';
import {NPvacasComponent} from './generar-demanda/detalleConflictos/n-pvacas/n-pvacas.component';
import {NPcesantiasComponent} from './generar-demanda/detalleConflictos/n-pcesantias/n-pcesantias.component';
import {NPprimaComponent} from './generar-demanda/detalleConflictos/n-pprima/n-pprima.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  {

    path: 'generar',
    children: [

      { path: 'datos-demandado', component: DatosDemandadoComponent },
      { path: 'datos-contrato', component: DatosContratoComponent },
      { path: 'seleccion-conflictos', component: SeleccionConflictosComponent},
      { path:  'detalle-despidoSJC', component: DespidoComponent},
      { path:  'detalle-NoPagoSalario', component: NPsalarioComponent},
      { path:  'detalle-NoPagoVacas', component: NPvacasComponent},
      { path:  'detalle-NoPagoCesantias', component: NPcesantiasComponent},
      { path:  'detalle-NoPagoPrima', component: NPprimaComponent},

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
