import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { DemandadoService, DemandaPdfService } from '../../../../../services/service.index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { saveAs } from 'file-saver';
import {LocalStorageService} from '../../../../../services/localStorage/local-storage.service'




@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit, AfterContentChecked  {
  private tipoDocumentoPersona: string;
  private numeroDocumentoPersona: number;
  private nombresPersona: string;
  private apellidosPersona: string;
  private chequeado = true;

  formularioJuridica: FormGroup;

  formularioRepresentante: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private demandadoService: DemandadoService,
    private demandaPdfService: DemandaPdfService,
    private router: Router,
    public snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService
    ) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial':  [null, Validators.required],
      'nit':          [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'telefono':     [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'email':        [null, Validators.compose([Validators.required, Validators.email])],
      'ubicacion':    this.formBuilder.group({
        'direccion':    [null, Validators.required],
        'departamento': [null, Validators.required],
        'municipio':    [null, Validators.required]
      }),
      'checkedDatosRepresentante': [null]

    });

  }

  invertir() {
    this.chequeado ? this.chequeado = false : this.chequeado = true;
  }


  ngOnInit() { }

  ngAfterContentChecked() { }

  eventoHijoFormulario(e) {
    this.formularioRepresentante = e;
    // console.log(e.controls);


  }


  guardarDemandado(cheked: boolean) {
    let objetoDemandadoJuridico: any;
    if (cheked) {

      this.formularioRepresentante = this.formularioRepresentante;
      this.nombresPersona = this.formularioRepresentante.value.nombre;
      this.apellidosPersona = this.formularioRepresentante.value.apellido;
      this.tipoDocumentoPersona = this.formularioRepresentante.value.documento.tipoDeDocumento;
      this.numeroDocumentoPersona = parseInt(this.formularioRepresentante.value.documento.numeroDeDocumento, 10);
      // console.log(this.formularioRepresentante.value)
       objetoDemandadoJuridico = {

        NItEmpresa: this.formularioJuridica.value.nit,
        nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
        direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
        telefonoEmpresa: this.formularioJuridica.value.telefono ,
        emailEmpresa: this.formularioJuridica.value.email,
        codigoCiudad: 8, // this.formularioJuridica.value.municipio,
        tipoDocumentoPersona: this.tipoDocumentoPersona,
        numeroDocumentoPersona: this.numeroDocumentoPersona,
        nombresPersona: this.nombresPersona,
        apellidosPersona: this.apellidosPersona
      };
console.log('CHECKEADO');
    } else {

   objetoDemandadoJuridico = {

      NItEmpresa: this.formularioJuridica.value.nit,
      nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
      direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
      telefonoEmpresa: this.formularioJuridica.value.telefono ,
      emailEmpresa: this.formularioJuridica.value.email,
      codigoCiudad: 8, // this.formularioJuridica.value.municipio
    };
    console.log('No Checkeado');

  }



   // console.log(objetoDemandadoJuridico);
    this.demandadoService.guardarDemandadoJuridico( objetoDemandadoJuridico )
      .subscribe( res => {

        // await this.generarPdf();

        console.log(res);
        this.snackBar.open('guardado exitosamente', '', {
          duration: 1000,
        });
        localStorage.setItem('demandadoJuridico', JSON.stringify(objetoDemandadoJuridico));
        this.localStorageService.setDataInLocalStorage('seleccionDemandado', 'juridico');
        this.router.navigate(['../datos-contrato'], {relativeTo: this.activatedRoute});

        }, err => {
        console.log(err);

        this.snackBar.open('empresa ya existe', '', {
          duration: 1000,
        });
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



  public async correrPrueba(cheked) {


     this.guardarDemandado(cheked);
    // await this.generarPdf();
    // await this.enviarPdf();
    // await this.descargarPdf();

  }


  verificar( cheked ) {

    // if ( cheked && (!this.formularioJuridica.valid )) {
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
