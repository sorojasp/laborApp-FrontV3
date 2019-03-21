import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demanda-natural',
  templateUrl: './demanda-natural.component.html',
  styleUrls: ['./demanda-natural.component.css']
})
export class DemandaNaturalComponent implements OnInit {

  formularioNatural: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formularioNatural = this.formBuilder.group({
      'nombre':         [null, Validators.required],
      'apellido':       [null, Validators.required],
      'telefono':       [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'email':          [null, Validators.compose([Validators.required, Validators.email])],
      'documento':      this.formBuilder.group({
        'tipoDeDocumento':   ['CC'],
        'numeroDeDocumento': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])]
      }),
      'ubicacion':      this.formBuilder.group({
        'direccion':      [null, Validators.required],
        'departamento':   [null, Validators.required],
        'municipio':      [null, Validators.required]
      })

    });

  }

  ngOnInit() {
  }


  log(){

    /*
  dataDemandaPersonaNatural = {
      fechaDemandaPersonaNatural: this.formularioNatural.,
      codigoCiudad: this.formularioNatural.,
      tipoDocumentoPersona: this.formularioNatural.,
      numeroDocumentoPersona: this.formularioNatural.,
      IdPersonaNatural: this.formularioNatural.,
      idContrato: this.formularioNatural.,
      fechaPropuestaRadicacionDemandaPersonaN: this.formularioNatural.,
      fecharRealRadicacionDemandaPersonaN: this.formularioNatural.,
      fechaPropuestaRadicacionDerechoPetiPersonaN: this.formularioNatural.,
      fecharRealRadicacionDerechoPetiPersonaN: this.formularioNatural.,
      informeDesicionFinalDemandaPersonaN: this.formularioNatural.,
      respuestaFinalDemandaersonaN: this.formularioNatural.;
}
*/
    console.log(this.formularioNatural.value);
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