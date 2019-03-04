import { Component, OnInit } from '@angular/core';
import { Animations, fader } from '../../route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [],
  animations: [
    fader
  ]
})
export class UsuarioComponent implements OnInit {


  ngOnInit() {
  }

  prepareRoute( outlet: RouterOutlet ) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
