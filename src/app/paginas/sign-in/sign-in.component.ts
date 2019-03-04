import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Forms
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';


//SnackBar
import {MatSnackBar} from '@angular/material';
import { UsuariosService } from '../../services/service.index';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formularioSignIn: FormGroup; /* Se esta declarando que formularioSignIn 
  es de tipo FormGroup */
  // Password
  hide = true;

  constructor(
    private usuarioService: UsuariosService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router) {

      this.formularioSignIn = this.formBuilder.group({
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'password': [null, Validators.required]
      });

      if(this.usuarioService.estaLogeado()){
        this.router.navigate(['/usuario'])
      }
  }

  ngOnInit() {

  }


  //MatSnackBar
  openSnackBar() {
    if( this.formularioSignIn.valid ){

      this.usuarioService.loginUsuario(this.formularioSignIn.value)
        .subscribe( (res: any) => {

          if (res){

            this.router.navigate(['/usuario'])

          }else{

            this.snackBar.open('Credenciales incorrectas', '', {
              duration: 2500,
            });
          }

        })
    } else {

      this.snackBar.open('Ingresaste un dato mal', '', {
        duration: 2500,
      });
    }

  }

  //Email
  getErrorMessage() {
    return this.formularioSignIn.get('email').hasError('required') ? 'Introduzca un email' :
          this.formularioSignIn.get('email').hasError('email') ? 'Email no vaildo' : '';
  }






}
