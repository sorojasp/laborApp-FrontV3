import { Injectable } from '@angular/core';
import { CanActivateChild, Router, CanActivate } from '@angular/router';
import { UsuariosService } from '../../usuario/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarTokenGuard implements CanActivateChild {

  constructor( private usuarioService: UsuariosService, private router: Router ){}




  canActivateChild(): Promise<boolean> | boolean {

    const token = this.usuarioService.token;

    const payload = JSON.parse( atob( token.split('.')[1]) );


    if (this.expiro(payload.exp)){
      return false;
    }

    return this.renovacion(payload.exp);
  }

  renovacion(fechaExp: number): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let ahora = new Date();
      let tokenExp = new Date( fechaExp * 1000 );

      ahora.setTime( ahora.getTime() + ( 5 * 24 * 60 * 60 * 1000) )

      if(tokenExp.getTime( ) > ahora.getTime()){
        resolve(true);
      }else{
        this.usuarioService.renovarToken()
          .subscribe( res => {
            console.log('renovo')
            resolve(res)
          }, err => {
            this.router.navigate(['/login'])
            console.log(err)
            reject(false)
          })
      }

    })

  }

  expiro(fechaExp: number): boolean {

    const ahora = new Date().getTime() / 1000;

    if ( fechaExp < ahora){
      return true;
    }else{
      return false;
    }
  }
}
