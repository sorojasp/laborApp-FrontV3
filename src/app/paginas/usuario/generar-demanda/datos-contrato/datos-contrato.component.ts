import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators
  } from '@angular/forms';





@Component({
  selector: 'app-datos-contrato',
  templateUrl: './datos-contrato.component.html',
  styleUrls: ['./datos-contrato.component.css']
})
export class DatosContratoComponent implements OnInit, AfterContentChecked {

  formularioContrato: FormGroup;
  FormCheked: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
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

    this.router_.navigate(['../seleccion-conflictos'], { relativeTo: this.activatedRoute });
    let dataContract: any;
    dataContract = {
      dataContract_: this.formularioContrato.value

    };
    localStorage.setItem('infoContrato', JSON.stringify(this.formularioContrato.value));
    let infoContrato_: any;
    infoContrato_ = localStorage.getItem('infoContrato');
    console.log(infoContrato_.tipoContrato);

  }







}
