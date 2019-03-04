import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-n-pvacas',
  templateUrl: './n-pvacas.component.html',
  styleUrls: ['./n-pvacas.component.css']
})
export class NPvacasComponent implements OnInit, AfterContentChecked {
  dataOfConflict: any;
  formularioDetalleNoPagoVacas: FormGroup;
  formcheked: boolean;

  constructor(
    private router_: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute

  ) {
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    this.formularioDetalleNoPagoVacas = this.formBuilder.group({
      'fechaInicioNoPagoVacaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  ngAfterContentChecked() { }

  subirDetalleNoPagoVacas() {
    localStorage.setItem('detalleNoPagoVacas', JSON.stringify(this.formularioDetalleNoPagoVacas.value));

    this.irSiguienteVista();

  }

  irSiguienteVista(): void {
    if ( this.dataOfConflict.noPagoCesantias === true) {
      this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoARL === true ||
                this.dataOfConflict.noPagoPensiones === true ||
                this.dataOfConflict.noPagoPrimas === true ||
                this.dataOfConflict.noPagoHorasExtras === true ||
                this.dataOfConflict.noPagoFestiDomini === true
        ) {
          alert('debe contactar un abogado');
        } else {
          alert ('en breve se generará su demanda');
        }

  }

}
