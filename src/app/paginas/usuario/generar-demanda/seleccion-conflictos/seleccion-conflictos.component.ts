import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators
  } from '@angular/forms';



@Component({
  selector: 'app-seleccion-conflictos',
  templateUrl: './seleccion-conflictos.component.html',
  styleUrls: ['./seleccion-conflictos.component.css']
})
export class SeleccionConflictosComponent  {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  formularioSeleccionConflictos: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private router_: Router,
  private activatedRoute: ActivatedRoute
) {
  this.formularioSeleccionConflictos = this.formBuilder.group({
    'despidoInjustificado': [null],
    'noPagoSalario': [null],
    'noPagoVacaciones': [null],
    'noPagoCesantias': [null],
    'noPagoARL': [null],
    'noPagoPensiones': [null],
    'noPagoPrimas': [null],
    'noPagoHorasExtras': [null],
    'noPagoFestiDomini': [null]

  });
}


subirDatosConflictos() {
localStorage.removeItem('value');

}



}

