import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-n-psalario',
  templateUrl: './n-psalario.component.html',
  styleUrls: ['./n-psalario.component.css']
})
export class NPsalarioComponent implements OnInit {
  formularioNoPagoSalario: FormGroup;
  formcheked: boolean;
  dataOfConflict: any;


  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.formularioNoPagoSalario = this.formBuilder.group({
      'fechaNoPagoSalario': [null, Validators.required]

    });
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));

  }

  ngOnInit() {
  }


  subirNoPagoSalario(): void {
    localStorage.setItem('detalleNoPagoSalario', JSON.stringify(this.formularioNoPagoSalario.value));
    if (this.dataOfConflict.noPagoVacaciones === true ) {
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
        }

  }

}
