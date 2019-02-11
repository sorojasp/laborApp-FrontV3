import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Custom module
import { FragmentosModule } from 'src/app/fragmentos/fragmentos.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MaterialModule } from '../../material';

//Componentes
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactarAbogadoComponent } from './contactar-abogado/contactar-abogado.component';
    //Componentes para generar la demanda
import { DatosDemandadoComponent } from './generar-demanda/datos-demandado/datos-demandado.component';
import { DemandaJuridicaComponent } from './generar-demanda/datos-demandado/demanda-juridica/demanda-juridica.component';
import { RepresentanteComponent } from './generar-demanda/datos-demandado/demanda-juridica/representante/representante.component';
import { DemandaNaturalComponent } from './generar-demanda/datos-demandado/demanda-natural/demanda-natural.component';
import { DatosContratoComponent } from './generar-demanda/datos-contrato/datos-contrato.component';



@NgModule({
  declarations: [
    DatosDemandadoComponent,
    DemandaJuridicaComponent,
    DemandaNaturalComponent,
    RepresentanteComponent,
    HomeComponent,
    PerfilComponent,
    ContactarAbogadoComponent,
    DatosContratoComponent,


  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    FragmentosModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class UsuarioModule { }
