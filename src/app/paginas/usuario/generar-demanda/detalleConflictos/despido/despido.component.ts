import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-despido',
  templateUrl: './despido.component.html',
  styleUrls: ['./despido.component.css']
})
export class DespidoComponent implements OnInit, AfterContentChecked {

  formularioDetalleDSJC: FormGroup;
  formcheked: boolean;
  dataOfConflict: any;

  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.formularioDetalleDSJC = this.formBuilder.group({
      'fechaDespidoSJC': [null, Validators.required]
    });

     this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));

  }

  ngOnInit() { }
  ngAfterContentChecked() { }

  irNuevaRuta() {
    if (this.dataOfConflict.noPagoSalario === true) {
      this.router_.navigate(['../detalle-NoPagoSalario'], { relativeTo: this.activatedRoute });
    } else if (this.dataOfConflict.noPagoVacaciones === true ) {
      this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoCesantias === true) {
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



  enviarDetalleDespidoSJC(): void {

    localStorage.setItem('detalleDespidoSJC', JSON.stringify(this.formularioDetalleDSJC.value));
    console.log(this.formularioDetalleDSJC.value.fechaDespidoSJC);
    console.log(this.formularioDetalleDSJC.valid);
    this.irNuevaRuta();

  }


}
