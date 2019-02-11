import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {


  img_src: string = '../../assets/img/user_default.png';
  usuario_name = 'Jonathan Arias'



  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );




  salir(){

    this.router.navigate(['../../'])

  }

  generarDemanda(evento){

    this.router.navigate(['generar/datos-demandado'], { relativeTo: this.activeRoute});

    return evento;
  }

  perfilUsuario(evento){

    this.router.navigate(['perfil', 55], { relativeTo: this.activeRoute})
    return evento;
  }


  contactarAbogado(evento){

    this.router.navigate(['contactar-abogado'], { relativeTo: this.activeRoute})
    return evento;
  }

}
