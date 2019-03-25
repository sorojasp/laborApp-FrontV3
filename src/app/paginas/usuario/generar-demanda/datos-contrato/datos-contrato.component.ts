import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators
  } from '@angular/forms';

import {ContratoLaboralService} from '../../../../services/ContratoLaboral/contrato-laboral.service';

import {LocalStorageService} from '../../../../services/localStorage/local-storage.service';
import {DemandaNaturalService} from '../../../../services/demandaNatural/demanda-natural.service';
import {DemandaJuridicaService} from '../../../../services/demandaJuridica/demanda-juridica.service';


import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-datos-contrato',
  templateUrl: './datos-contrato.component.html',
  styleUrls: ['./datos-contrato.component.css']
})
export class DatosContratoComponent implements OnInit, AfterContentChecked {

  formularioContrato: FormGroup;
  FormCheked: boolean;
  DataContratoLaboral: any;
  datosUsario: any;
  datosEmpresa: any;
  datosPersonaNatural: any;


  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
    private contratoLaboralService: ContratoLaboralService,
    private localStorageService: LocalStorageService,
    public snackBar: MatSnackBar,
    private demandaNaturalService: DemandaNaturalService,
    private demandaJuridicaService: DemandaJuridicaService
  ) {
    this.formularioContrato = this.formBuilder.group({
      'tipoContrato': [null, Validators.required],
      'fechaInicioContrato': [null, Validators.required],
      'fechaFinalContrato': [null, Validators.required],
      'ultimoSalario': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'descripcionFunciones': [null, Validators.compose([Validators.required, Validators.max(15)])]
    });
    this.FormCheked = true;
  }

  ngOnInit() { }
  ngAfterContentChecked() { }

  subirDatosContrato() {

    this.contratoLaboralService.guardarContratoLaboral(this.obtenerDataContratoLaboral())
    .subscribe(  (result: any)  => {
      console.log(result);
      this.snackBar.open('guardado exitosamente', '', {
        duration: 1000,
      });
      let dataContrato: any = {
        general: this.DataContratoLaboral,
        id: result.contratoLaboral.idContrato
      };

      dataContrato = JSON.stringify(dataContrato);
      this.localStorageService.setDataInLocalStorage('contratoData', dataContrato);

      if ( this.localStorageService.getSeleccionConflicto() === 'natural') {
         this.demandaNaturalService.guardarDemandaNatural(this.obtenerDataDemandaNatural()).
        subscribe(( res_: any) => {
          console.log(res_);

        }, error_ => {
          console.log(error_);
        });

      } else if (this.localStorageService.getSeleccionConflicto() === 'juridico') {
        console.log(`información del contrato: ${this.localStorageService.getDataContrato('id')}`);
        this.demandaJuridicaService.guardarDemandaNatural(this.obtenerDataDemandaJuridica()).
        subscribe(( res: any) => {
          console.log(res);

        }, error => {
          console.log(error);
          console.log(`información del contrato*: ${this.localStorageService.getDataContrato('id')}`);
        });

      }

      this.router_.navigate(['../seleccion-conflictos'], { relativeTo: this.activatedRoute });

    }, err => {
    console.log(err);
    this.snackBar.open('Problemas en la inserción de datos de contrato laboral', '', {
      duration: 1000,
    });


    });

    //
    let dataContract: any;
    dataContract = {
      dataContract_: this.formularioContrato.value

    };

  }


  obtenerDiaActual(): any {
    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    today = new Date(date);
    return today;
  }

  obtenerDataDemandaNatural(): any {

    const demandaNatural = {

    fechaDemandaPersonaNatural: this.obtenerDiaActual(),
    codigoCiudad: this.localStorageService.getDataUsuario('codigoCiudad'),
    tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento') ,
    numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento') ,
    IdPersonaNatural: this.localStorageService.getDataDemandadoNatural('idPersona') ,
    idContrato: this.localStorageService.getDataContrato('id'),
  };
  
  return demandaNatural;
  }


  obtenerDataContratoLaboral(): any {

    if (this.localStorageService.getSeleccionConflicto() === 'juridico') {

      this.DataContratoLaboral = {
       tipoContrato: this.formularioContrato.value.tipoContrato,
       fechaInicioContrato: this.formularioContrato.value.fechaInicioContrato,
       fechaFinalContrato: this.formularioContrato.value.fechaFinalContrato,
       ultimoSalario: this.formularioContrato.value.ultimoSalario,
       descripcionFunciones: this.formularioContrato.value.descripcionFunciones,
       tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
       numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
       NItEmpresa: this.localStorageService.getDataEmpresa('nit')
     };
   } else {
     this.DataContratoLaboral = {
       tipoContrato: this.formularioContrato.value.tipoContrato,
       fechaInicioContrato: this.formularioContrato.value.fechaInicioContrato,
       fechaFinalContrato: this.formularioContrato.value.fechaFinalContrato,
       ultimoSalario: this.formularioContrato.value.ultimoSalario,
       descripcionFunciones: this.formularioContrato.value.descripcionFunciones,
       tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
       numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
       IdPersonaNatural: this.localStorageService.getDataDemandadoNatural('idPersona')

     };
   }
   return this.DataContratoLaboral;

  }

  obtenerDataDemandaJuridica(): any {
    const dataDemandaJuridica = {
      fechaDemandaEmpresa: this.obtenerDiaActual(),
      codigoCiudad: this.localStorageService.getDataUsuario('codigoCiudad'),
      tipoDocumentoPersona: this.localStorageService.getDataUsuario('tipoDocumento'),
      numeroDocumentoPersona: this.localStorageService.getDataUsuario('numeroDocumento'),
      NItEmpresa: parseInt(this.localStorageService.getDataEmpresa('nit'), 10),
      idContrato: this.localStorageService.getDataContrato('id'),
    };
    console.log(dataDemandaJuridica);
    return dataDemandaJuridica;

  }








}
