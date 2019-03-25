import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {NoPagoPrimaService} from '../../../../../services/conflictsDetail/no-pago-prima.service';

@Component({
  selector: 'app-n-pprima',
  templateUrl: './n-pprima.component.html',
  styleUrls: ['./n-pprima.component.css']
})
export class NPprimaComponent implements OnInit {
  detailFormPrimaPay: FormGroup;
  formcheked: boolean;
  dataOfConflict: any;


  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
    private noPagoPrimaService: NoPagoPrimaService
    ) {

    this.detailFormPrimaPay = this.formBuilder.group({
        'inicioNoPagoPrima': [null, Validators.required],
        'finalNoPagoPrima': [null, Validators.required],
      });
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));

    }

  ngOnInit() {
  }

  uploadPrimaData () {
    localStorage.setItem('detalleNoPagoPrima', JSON.stringify(this.detailFormPrimaPay.value));
    /*
    this.noPagoPrimaService.guardarPrimaData(this.buildDataToSend())
    .subscribe( result => {
      console.log(result);

    }, err => {
      console.log(err);
    });
    */
    this.siguienteVista();
  }

  siguienteVista () {
    this.router_.navigate(['../final-demanda'], { relativeTo: this.activatedRoute });

  }

  buildDataToSend (): any {
    let startContractDate: any;
    let finishContractDate: any;
    startContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaInicioContrato;
    finishContractDate = JSON.parse(localStorage.
    getItem('infoContrato')).fechaFinalContrato;

    const primaData = {
      idConflictoPrima: 45,
      fechaInicioContrato: startContractDate ,
      fechaFinalContrato: finishContractDate,
      fechaUltimaPrimaPagada: this.detailFormPrimaPay.value.inicioNoPagoPrima,
      fechaFinalNoPagoCesantias: this.detailFormPrimaPay.value.finalNoPagoPrima,
      montoDinero_Prima: 89000,
      idDemandaPersonaNatural: 858585,
      idDemandaEmpresa: 10000,
    };

    return primaData;

  }




}
