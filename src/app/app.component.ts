import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, RouterOutlet } from '@angular/router';
import { Animations, slider } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'LaborApp';

  showSpiner = true;
  fade = '';


  constructor(private _router: Router) {

    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        if(/*routerEvent['url'] === '/login' ||*/ routerEvent['url'] === '/usuario'){
          this.showSpiner = true;
        }
      }

      if (routerEvent instanceof NavigationEnd) {
        // this.fade = 'fadeout 6s linear'

        setTimeout(() => {
          this.showSpiner = false;
        }, 4000)

      }
    })

  }

  prepareRoute( outlet: RouterOutlet ) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
