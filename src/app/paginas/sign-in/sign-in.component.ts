import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Forms
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';


//SnackBar
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formularioSignIn: FormGroup;
  //Password
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router) {

      this.formularioSignIn = this.formBuilder.group({
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'password': [null, Validators.required]
      });

  }

  ngOnInit() {
  }


  //MatSnackBar
  openSnackBar() {
    this.snackBar.open('Credenciales incorrectas', '', {
      duration: 2500,
    });
  }

  //Email
  getErrorMessage() {
    return this.formularioSignIn.get('email').hasError('required') ? 'Introduzca un email' :
          this.formularioSignIn.get('email').hasError('email') ? 'Email no vaildo' : '';
  }






}
