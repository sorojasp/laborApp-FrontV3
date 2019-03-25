import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NoPagoVacacionesService} from '../../../../../services/conflictsDetail/no-pago-vacaciones.service';

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
    private activatedRoute: ActivatedRoute,
    private noPagoVacacionesService: NoPagoVacacionesService

  ) {
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
    this.formularioDetalleNoPagoVacas = this.formBuilder.group({
      'fechaInicioNoPagoVacaciones': [null, Validators.required],
      'fechaFinalNoPagoVacaciones': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  ngAfterContentChecked() { }

  subirDetalleNoPagoVacas() {
    localStorage.setItem('detalleNoPagoVacas', JSON.stringify(this.formularioDetalleNoPagoVacas.value));
    /*
    this.noPagoVacacionesService.guardarDataConfVaca(this.construyeDatosAenviar())
    .subscribe( result => {
      console.log(result);

    }, err => {
      console.log(err);
    });
    */
    this.irSiguienteVista();

  }

  irSiguienteVista(): void {
    if ( this.dataOfConflict.noPagoCesantias === true) {
      this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoPrimas  === true) {
      this.router_.navigate(['../detalle-NoPagoPrima'], { relativeTo: this.activatedRoute });
    } else  {
      this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });
    }

  }

  construyeDatosAenviar (): any {

    let startContractDate: any;
    let finishContractDate: any;
    startContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaInicioContrato;
    finishContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaFinalContrato;

    const dataVacationConflict: any = {
      idConflictoVacaciones: 0,
      fechaInicioContrato: startContractDate,
      fechaFinalContrato: finishContractDate,
      fechaUltimasVacaciones: this.formularioDetalleNoPagoVacas.value.fechaInicioNoPagoVacaciones,
      fechaFinalNoPagoVacaciones: this.formularioDetalleNoPagoVacas.value.fechaFinalNoPagoVacaciones,
      montoDinero_Vacaciones: 500,
      idDemandaPersonaNatural: 45,
      idDemandaEmpresa: 89

    }

  return dataVacationConflict;
  
  }

}
