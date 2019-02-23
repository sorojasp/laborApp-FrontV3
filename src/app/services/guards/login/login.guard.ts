import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate, Resolve } from '@angular/router';
import { UsuariosService } from '../../usuario/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad{


  constructor(private usuarioService: UsuariosService, private router: Router){}



  canLoad(){
    if(this.usuarioService.estaLogeado()){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }

}
