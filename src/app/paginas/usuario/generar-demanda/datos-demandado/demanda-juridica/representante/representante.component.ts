import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  public formularioRepresentante:FormGroup;


  @Output() representanteFormulario = new EventEmitter();


  constructor(private formBuilder:FormBuilder ){

    this.formularioRepresentante = formBuilder.group({
      'nombre':    [null, Validators.required],
      'apellido':  [null, Validators.required],
      'email':     [null, Validators.compose([Validators.required, Validators.email])],
      'documento': this.formBuilder.group({
        'tipoDeDocumento':   ['CC'],
        'numeroDeDocumento': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])]
      })
    })

  }

  ngOnInit(){

    this.representanteFormulario.emit(this.formularioRepresentante);

  }

  ngAfterContentChecked(){

    this.representanteFormulario.emit(this.formularioRepresentante);

  }

  getErrorMessage() {
    return this.formularioRepresentante.get('email').hasError('required') ? 'Introduzca un email' :
           this.formularioRepresentante.get('email').hasError('email') ? 'Email no vaildo' : '';
 }
}
