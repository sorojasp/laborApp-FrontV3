import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { saveAs } from 'file-saver';


import {  DemandadoService, DemandaPdfService } from '../../../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit, AfterContentChecked  {

  formularioJuridica: FormGroup;

  formularioRepresentante: FormGroup = this.formularioJuridica;

  constructor(
    private formBuilder: FormBuilder,
    private demandadoService: DemandadoService,
    private demandaPdfService: DemandaPdfService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial':  [null, Validators.required],
      'nit':          [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'telefono':     [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'email':        [null, Validators.compose([Validators.required, Validators.email])],
      'ubicacion':    this.formBuilder.group({
        'direccion':    [null, Validators.required],
        'departamento': [null, Validators.required],
        'municipio':    [null, Validators.required]
      })
    });

  }


  ngOnInit() { }

  ngAfterContentChecked() { }

  eventoHijoFormulario(e) {
    this.formularioRepresentante = e;
  }


  guardarDemandado() {

    const objetoDemandadoJuridico = {

      NItEmpresa: this.formularioJuridica.value.nit,
      nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
      telefonoEmpresa: this.formularioJuridica.value.telefono ,
      emailEmpresa: this.formularioJuridica.value.email,
      direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
      codigoDaneMunicipio: 90

    };


    this.demandadoService.guardarDemandadoJuridico( objetoDemandadoJuridico )
      .subscribe(async res => {

        await this.generarPdf();


      });

  }

  generarPdf() {
    const nit = this.formularioJuridica.value.nit;
    this.demandaPdfService.generarPdf(nit)
      .subscribe( async res => {
        console.log(res);
        this.router.navigate(['../datos-contrato'], {relativeTo: this.activatedRoute});
        await this.enviarPdf();
        await this.descargarPdf();
      }, err => {
        console.log(err);
      });
  }

  enviarPdf() {
    this.demandaPdfService.enviarPdf()
      .subscribe( res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  descargarPdf() {
    this.demandaPdfService.descargarPdf()
      .subscribe( doc => {
        saveAs( doc, 'demanda.pdf' );
      }, err => {
        console.log(err);
      });
  }



  public async correrPrueba() {

    await this.guardarDemandado();
    // await this.generarPdf();
    // await this.enviarPdf();
    // await this.descargarPdf();

  }


  verificar( cheked ) {
    if ( cheked && (!this.formularioJuridica.valid || !this.formularioRepresentante.valid)) {
      return true;
    } else if ( !this.formularioJuridica.valid ) {
      return true;
    } else {
      return false;
    }
  }




  getErrorMessage() {
    return this.formularioJuridica.get('email').hasError('required') ? 'Introduzca un email' :
    this.formularioJuridica.get('email').hasError('email') ? 'Email no vaildo' : '';
 }
}
