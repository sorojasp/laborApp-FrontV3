import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-demandado',
  templateUrl: './datos-demandado.component.html',
  styleUrls: ['./datos-demandado.component.css']
})
export class DatosDemandadoComponent implements OnInit {

  opcion: String = 'opcion1';

  informacion: boolean = true;


  constructor() { }

  ngOnInit() {
  }

}
