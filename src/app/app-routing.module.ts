import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// component
import { SignInComponent } from './paginas/sign-in/sign-in.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { LoginGuard, VerificarTokenGuard } from './services/service.index';

const routes: Routes = [
  {
    path: 'login', // lo que se solicita desde la ruta
    component: SignInComponent, // Componente que se carga cuando la ruta es solicitada
    data: { animation: 'login' }//
  },
  {
    path: 'signup',
    component: SignUpComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'usuario',
    canLoad: [ LoginGuard ], // Esto se llama Guard.  Esto se activa entre lo que la ruta
    canActivateChild: [ VerificarTokenGuard ], // Esto se llama Guard. es solicitada y es cargada
    component: UsuarioComponent,
    loadChildren: './paginas/usuario/usuario.module#UsuarioModule'// Este es el Lazy loading que es le que carga el módulo que contiene
    // las rutas del usuario.
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'} // Rutas solicitadas con un get 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
