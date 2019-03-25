import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators
  } from '@angular/forms';

  import { MatSnackBar } from '@angular/material';

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
  animal: string;
  name: string;


constructor(
  private formBuilder: FormBuilder,
  private router_: Router,
  private activatedRoute: ActivatedRoute,
  public snackBar: MatSnackBar

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
localStorage.setItem('dataConflictos', JSON.stringify(this.formularioSeleccionConflictos.value));



if (this.formularioSeleccionConflictos.value.despidoInjustificado === true) {
  this.router_.navigate(['../detalle-despidoSJC'], { relativeTo: this.activatedRoute });

}  else if (this.formularioSeleccionConflictos.value.noPagoSalario === true) {
  this.router_.navigate(['../detalle-NoPagoSalario'], { relativeTo: this.activatedRoute });
} else if (this.formularioSeleccionConflictos.value.noPagoVacaciones === true) {
  this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
} else if (this.formularioSeleccionConflictos.value.noPagoCesantias === true) {
  this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
} else if (this.formularioSeleccionConflictos.value.noPagoPrimas === true) {
  this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });

} else if (this.formularioSeleccionConflictos.value.noPagoARL === true ||
           this.formularioSeleccionConflictos.value.noPagoPensiones === true ||
           this.formularioSeleccionConflictos.value.noPagoHorasExtras === true ||
           this.formularioSeleccionConflictos.value.noPagoFestiDomini === true) {
            this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
} else {

this.snackBar.open('Debes seleccionar al menos un conflicto', '', {
  duration: 2500,
});

}
}

}

