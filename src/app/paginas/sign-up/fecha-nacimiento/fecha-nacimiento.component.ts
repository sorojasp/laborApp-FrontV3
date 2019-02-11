import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fecha-nacimiento',
  templateUrl: './fecha-nacimiento.component.html',
  styleUrls: ['./fecha-nacimiento.component.css']
})
export class FechaNacimientoComponent implements OnInit {
  minDate = new Date(1900, 0, 0);
  maxDate = new Date(2001, 0, 0);

  @Output() Btn_fechaNacimiento = new EventEmitter();
  fechaNacimiento: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fechaNacimiento = formBuilder.group({
      'nacimiento': [null, Validators.required]

    });

  }

  ngOnInit() {
  }

  fechaNaci_clickBtnSiguiente():  void {

    const ObjfechaNaci: object = {
      fechaNacimiento : this.fechaNacimiento.value.nacimiento,
      Btn_Acti_fechaNaci : true

    };

    this.Btn_fechaNacimiento.emit(ObjfechaNaci);

  }



}
