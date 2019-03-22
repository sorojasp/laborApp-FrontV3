import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PersonaNaturalService } from '../../../../../services/personaNatural/persona-natural.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {LocalStorageService} from '../../../../../services/localStorage/local-storage.service';
@Component({
  selector: 'app-demanda-natural',
  templateUrl: './demanda-natural.component.html',
  styleUrls: ['./demanda-natural.component.css']
})
export class DemandaNaturalComponent implements OnInit {

  formularioNatural: FormGroup;
  dataDemandaPersonaNatural: object;


  constructor(
    private formBuilder: FormBuilder,
    private personaNaturalService: PersonaNaturalService,
    public snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService
    ) {

    this.formularioNatural = this.formBuilder.group({
      'nombre':         [null, Validators.required],
      'apellido':       [null, Validators.required],
      'telefono':       [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'email':          [null, Validators.compose([Validators.required, Validators.email])],
      'tipoDeDocumento':   ['cedulaCiudadania'],
      'numeroDeDocumento': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'direccion':      [null, Validators.required],
      'departamento':   [null, Validators.required],
      'ciudad':      [null, Validators.required]
  });

  }

  ngOnInit() {
  }


  log(){

    const idPersonaNatural = this.formularioNatural.value.numeroDeDocumento * 110;

      this.dataDemandaPersonaNatural = {
        tipoDocumentoPersona: this.formularioNatural.value.tipoDeDocumento,
        numeroDocumentoPersona:  this.formularioNatural.value.numeroDeDocumento,
        nombresPersona: this.formularioNatural.value.nombre,
        apellidosPersona: this.formularioNatural.value.apellido,
        direccionPersona: this.formularioNatural.value.direccion,
        codigoCiudad: 8, // this.formularioNatural.value.ciudad
        fechaNacimientoPersona: null,
        generoPersona: null,
        lugarExpedicionCedulaPersona: null,
        contrasenaPersona: null,
        IdPersonaNatural: idPersonaNatural
};
this.personaNaturalService.guardarPersonaNatural(this.dataDemandaPersonaNatural)
.subscribe(result => {
  console.log(result);
  this.snackBar.open('guardado exitosamente', '', {
    duration: 1000,
  });
  localStorage.setItem('DemandadoNatural', JSON.stringify(this.dataDemandaPersonaNatural));
  this.localStorageService.setDataInLocalStorage('seleccionDemandado', 'natural');
  this.router.navigate(['../datos-contrato'], { relativeTo: this.activatedRoute });

}, err => {

  console.log(err);
  this.snackBar.open('problemas al guardar', '', {
    duration: 1000,
  });
});

    console.log(this.dataDemandaPersonaNatural);
  }


 getErrorMessage() {
   return this.formularioNatural.get('email').hasError('required') ? 'Introduzca un email' :
          this.formularioNatural.get('email').hasError('email') ? 'Email no vaildo' : '';
 }
}

/*

var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
  document.getElementById("demo").innerHTML = today;
*/