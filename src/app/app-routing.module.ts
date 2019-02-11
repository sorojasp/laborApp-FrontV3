import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// component
import { SignInComponent } from './paginas/sign-in/sign-in.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {
    path: 'usuario',
    component: UsuarioComponent,
    loadChildren: './paginas/usuario/usuario.module#UsuarioModule'
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {useHash: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
