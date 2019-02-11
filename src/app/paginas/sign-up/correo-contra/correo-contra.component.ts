import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-correo-contra',
  templateUrl: './correo-contra.component.html',
  styleUrls: ['./correo-contra.component.css']
})
export class CorreoContraComponent implements OnInit {


  @Output() Btn_correoContrasena = new EventEmitter();
  correoContrasenaForm: FormGroup;
  hide = true;

  constructor(formBuilder: FormBuilder) {
    this.correoContrasenaForm = formBuilder.group({
      'correo':   [null, Validators.compose([Validators.required, Validators.email])],
      'key':      [null, Validators.required],
      'keyAgain': [null, Validators.required]
      // Se ingresan los campos del formulario que se quieren validar

    });


  }

  ngOnInit() {

  }

  correoContrase_clickBtnSiguiente(): void {

    const datoCorreoContrase: Object = {
      Btn_Acti_fechaNaci : true,
      correoUs: this.correoContrasenaForm.value.correo,
      keyUs: this.correoContrasenaForm.value.key,
      againKeyUs: this.correoContrasenaForm.value.keyAgain
    };

    this.Btn_correoContrasena.emit(datoCorreoContrase);


  }


  getErrorMessage() {
    return this.correoContrasenaForm.get('correo').hasError('required') ? 'Introduzca un email' :
          this.correoContrasenaForm.get('correo').hasError('email') ? 'Email no vaildo' : '';
 }



}
