import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {NoPagoCesantiasService} from '../../../../../services/conflictsDetail/no-pago-cesantias.service';
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
    private activatedRoute: ActivatedRoute,
    private noPagoCesantiasService: NoPagoCesantiasService
  ) {
    this.formDetailNoPagoCesantias = this.formBuilder.group({
      'fechaInicioNoPagoCesantias': [null, Validators.required],
      'fechaFinalNoPagoCesantias': [null, Validators.required]
    });
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));


  }

  ngOnInit() {}

  ngAfterContentChecked() { }


  subirDatosNoPagoCesantias() {
    localStorage.setItem('detalleNoPagoCesantias', JSON.stringify(this.formDetailNoPagoCesantias.value));
    this.noPagoCesantiasService.guardarDataConfCesantias(this.buildDataToSend())
    .subscribe( result => {
      console.log(result);

    }, err => {
      console.log(err);
    });


    this.irSiguienteVista();
  }

  irSiguienteVista(): void {
     if ( this.dataOfConflict.noPagoPrimas  === true) {
      this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoARL === true ||
                this.dataOfConflict.noPagoPensiones === true ||
                this.dataOfConflict.noPagoHorasExtras === true ||
                this.dataOfConflict.noPagoFestiDomini === true
        ) {
          alert('debe contactar un abogado');
        } else {
          alert ('en breve se generará su demanda');
        }

  }

  buildDataToSend (): any {

    let startContractDate: any;
    let finishContractDate: any;
    startContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaInicioContrato;
    finishContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaFinalContrato;
    const datosCesantias: any = {
      idConflictoCesantias: 85,
      fechaInicioContrato: startContractDate,
      fechaFinalContrato: finishContractDate,
      fechaUltimasCesantiasPagadas: this.formDetailNoPagoCesantias.value.fechaInicioNoPagoCesantias,
      fechaFinalNoPagoCesantias: this.formDetailNoPagoCesantias.value.fechaFinalnicioNoPagoCesantias,
      montoDinero_Cesantias: 80000,
      montoDinero_InteresesCesantias: 890000,
      idDemandaPersonaNatural: 78,
      idDemandaEmpresa: 1200
    };

return datosCesantias;
}



}
