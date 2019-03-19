import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {DespidoSJCService} from '../../../../../services/conflictsDetail/despido-sjc.service';


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
    private despidoSJCService: DespidoSJCService,

  ) {
    this.formularioDetalleDSJC = this.formBuilder.group({
      'fechaDespidoSJC': [null, Validators.required]
    });

     this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));

  }

  ngOnInit() { }
  ngAfterContentChecked() { }

  irNuevaRuta() {
    this.despidoSJCService.guardarConflictoDSJC(this.DatosParaenviar())
    .subscribe( result => {
      console.log(result);

    }, err => {
      console.log(err);
    });




    if (this.dataOfConflict.noPagoSalario === true) {
      this.router_.navigate(['../detalle-NoPagoSalario'], { relativeTo: this.activatedRoute });
    } else if (this.dataOfConflict.noPagoVacaciones === true ) {
      this.router_.navigate(['../detalle-NoPagoVacas'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoCesantias === true) {
      this.router_.navigate(['../detalle-NoPagoCesantias'], { relativeTo: this.activatedRoute });
    } else if ( this.dataOfConflict.noPagoPrimas  === true) {
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

  DatosParaenviar(): any {

    let startContractDate: any;
    startContractDate = JSON.parse(localStorage.
      getItem('infoContrato')).fechaInicioContrato;
    const despidoSJCdata: object  = {
      idConflictoDespidoSJC: 0,
      idDemandaPersonaNatural: 0,
      idDemandaEmpresa: 0,
      fechaInicioContrato: startContractDate  ,
      fechaDespido: this.formularioDetalleDSJC.value.fechaDespidoSJC,
      montoDinero_DSJC: 0
    };
    return despidoSJCdata;
  }



  enviarDetalleDespidoSJC(): void {

    localStorage.setItem('detalleDespidoSJC', JSON.stringify(this.formularioDetalleDSJC.value));
    console.log(this.formularioDetalleDSJC.value.fechaDespidoSJC.getUTCFullYear());
    this.irNuevaRuta();

  }


}

