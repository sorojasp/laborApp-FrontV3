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



    console.log(this.DataContratoLaboral);



    this.contratoLaboralService.guardarContratoLaboral(this.DataContratoLaboral)
    .subscribe(  result => {
      console.log(result);
      this.snackBar.open('guardado exitosamente', '', {
        duration: 1000,
      });
      this.localStorageService.setDataInLocalStorage('contratoData', this.DataContratoLaboral)
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
    localStorage.setItem('infoContrato', JSON.stringify(this.formularioContrato.value));
   
  }


 





}
