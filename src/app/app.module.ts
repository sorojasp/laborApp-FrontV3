
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Modulos Propios
import { MaterialModule } from './material';
import { FragmentosModule } from './fragmentos/fragmentos.module';

//Components
import { AppComponent } from './app.component';
import { SignInComponent } from './paginas/sign-in/sign-in.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

import { NomApeGeneComponent } from './paginas/sign-up/nom-ape-gene/nom-ape-gene.component';
import { DocumentoComponent } from './paginas/sign-up/documento/documento.component';
import { FechaNacimientoComponent } from './paginas/sign-up/fecha-nacimiento/fecha-nacimiento.component';
import { CorreoContraComponent } from './paginas/sign-up/correo-contra/correo-contra.component';

//servicios
import { ServiceModule } from './services/service.module';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NomApeGeneComponent,
    DocumentoComponent,
    FechaNacimientoComponent,
    CorreoContraComponent,
    UsuarioComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    FragmentosModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),


  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
