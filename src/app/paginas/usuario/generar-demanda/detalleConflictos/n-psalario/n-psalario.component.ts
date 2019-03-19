import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NoPagoSalarioService } from '../../../../../services/conflictsDetail/no-pago-salario.service';



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
    private noPagoSalarioService: NoPagoSalarioService

  ) {
    this.formularioNoPagoSalario = this.formBuilder.group({
      'fechaNoPagoSalario': [null, Validators.required],
      'fechaFinalNoPagoSalario': [null, Validators.required]

    });
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));

  }

  ngOnInit() {
  }



  irSiguienteVista(): void {

     if (this.dataOfConflict.noPagoVacaciones === true ) {
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


  subirNoPagoSalario(): void {
    localStorage.setItem('detalleNoPagoSalario', JSON.stringify(this.formularioNoPagoSalario.value));
    this.noPagoSalarioService.guardarNoPagoSalario(this.DatosParaEnviar())
    .subscribe( result => {
      console.log(result);

    }, err => {
      console.log(err);
    });

    this.irSiguienteVista();

  }

  DatosParaEnviar (): any {

    let startContractDate: any;
    let finishContractDate: any;
    startContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaInicioContrato;
    finishContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaFinalContrato;

    const DatosNopagoSalario: any  = {
      idConflictoPagoSalario: 20,
      fechaInicioContrato: startContractDate,
      fechaInicioNoPago: this.formularioNoPagoSalario.value.fechaNoPagoSalario,
      fechaFinalNoPagoSalario: this.formularioNoPagoSalario.value.fechaFinalNoPagoSalario,
      fechaFinalContrato: finishContractDate,
      montoDinero_PagoSalario: 0,
      idDemandaPersonaNatural: 0,
      idDemandaEmpresa: 0
    };

    return DatosNopagoSalario;
  }

}


