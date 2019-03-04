import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-n-pcesantias',
  templateUrl: './n-pcesantias.component.html',
  styleUrls: ['./n-pcesantias.component.css']
})
export class NPcesantiasComponent implements OnInit, AfterContentChecked {
  dataOfConflict: any;
  formDetailNoPagoCesantias: FormGroup;
  formcheked: boolean;

  constructor(
    private router_: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.formDetailNoPagoCesantias = this.formBuilder.group({
      'fechaInicioNoPagoCesantias': [null, Validators.required]
    });
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));


  }

  ngOnInit() {
  }

  ngAfterContentChecked() { }


  subirDatosNoPagoCesantias() {
    localStorage.setItem('detalleNoPagoCesantias', JSON.stringify(this.formDetailNoPagoCesantias.value));
    this.irSiguienteVista();
  }

  irSiguienteVista(): void {
     if ( this.dataOfConflict.noPagoARL === true ||
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
