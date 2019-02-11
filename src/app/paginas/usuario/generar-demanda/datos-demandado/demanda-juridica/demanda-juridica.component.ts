import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';


import { CedulaUsuarioService, DemandadoService, DemandaPdfService } from '../../../../../services/service.index';

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
    private router: Router,
    private activeRoute: ActivatedRoute,
    public cedulaUsuarioService: CedulaUsuarioService,
    private demandadoService: DemandadoService,
    private demandaPdfService: DemandaPdfService  ) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial':  [null, Validators.required],
      'nit':          [null,Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
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

  ngAfterContentChecked(){ }

  eventoHijoFormulario(e){
    this.formularioRepresentante = e;
  }


  guardarDemandado(){

    const objetoDemandadoJuridico = {

      NItEmpresa: this.formularioJuridica.value.nit,
      nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
      telefonoEmpresa: this.formularioJuridica.value.telefono ,
      emailEmpresa: this.formularioJuridica.value.email,
      direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
      codigoDaneMunicipio: 90

    };


    this.demandadoService.guardarDemandadoJuridico( objetoDemandadoJuridico )
      .subscribe( async res => {
          console.log(res)
          await this.generarPdf();
      })

  }

  generarPdf(){
    const nit = this.formularioJuridica.value.nit;
    const cedula = this.cedulaUsuarioService.obtenerCedual();
    this.demandaPdfService.generarPdf(nit, cedula)
      .subscribe( async res => {
        console.log(res);
        await this.enviarPdf();
      }, err => {
        console.log(err)
      })
  }

  enviarPdf(){
    const cedula = this.cedulaUsuarioService.obtenerCedual();
    this.demandaPdfService.enviarPdf(cedula)
      .subscribe( res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
  }

  descargarPdf(){
    const cedula = this.cedulaUsuarioService.obtenerCedual();
    this.demandaPdfService.descargarPdf(cedula)
      .subscribe( doc => {
        saveAs( doc, 'demanda.pdf' )
      }, err => {
        console.log(err)
      })
  }



  public async correrPrueba(){

    await this.guardarDemandado();
    // await this.generarPdf();
    // await this.enviarPdf();
    //await this.descargarPdf();

  }


  verificar( cheked ){
    if( cheked && (!this.formularioJuridica.valid || !this.formularioRepresentante.valid)){
      return true;
    }else if( !this.formularioJuridica.valid ){
      return true;
    }else{
      return false;
    }
  }




  getErrorMessage() {
    return this.formularioJuridica.get('email').hasError('required') ? 'Introduzca un email' :
          this.formularioJuridica.get('email').hasError('email') ? 'Email no vaildo' : '';
 }
}
