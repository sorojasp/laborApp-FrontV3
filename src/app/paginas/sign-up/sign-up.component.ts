import { Component, OnInit} from '@angular/core';
import { Router }  from '@angular/router';

//snackBar
import {MatSnackBar} from '@angular/material';

//Modelos
import { Usuario } from '../../models/Usuario';

//Servicios
import { UsuariosService } from '../../services/usuario/usuarios.service';
import { CedulaUsuarioService } from '../../services/cedula-usuario/cedula-usuario.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nombreApeVisual: boolean = true;
  documentoVisual: boolean = false;
  fechaNacivisuai: boolean = false;
  correoContraseVisua: boolean = false ;
  datosForm1: any;
  datosForm2: any;
  datosForm3: any;
  datosForm4: any;


 constructor(
   private usuariosService: UsuariosService,
   public cedulaUsuario: CedulaUsuarioService,
   public router: Router,
  public snackBar: MatSnackBar) {}


  ngOnInit() {}


  // Se envía el
  MostrarNombreVisual(datosFormNombreApe): void {

    this.datosForm1 = datosFormNombreApe;

    this.nombreApeVisual = false;
    this.documentoVisual  = true;
    this.fechaNacivisuai  = false;
    this.correoContraseVisua  = false ;


  }


  mostrarDocumento(datosFormCedula: any): void {

    this.datosForm2 = datosFormCedula;

    this.nombreApeVisual = false;
    this.documentoVisual  = false;
    this.fechaNacivisuai  = true;
    this.correoContraseVisua  = false ;
  }

  mostrarcorreoContra(datofechaNacimiento): void {

    this.datosForm3 = datofechaNacimiento;

    this.nombreApeVisual = false;
    this.documentoVisual  = false;
    this.fechaNacivisuai  = false;
    this.correoContraseVisua  = true ;
  }

  recibeCorreoContra(datoCorreoContrase): void {

    this.datosForm4 = datoCorreoContrase;

    const informacionUsuario: Usuario = {
      cedulaPersona: this.datosForm2.cedulaUsuario,
      nombresPersona: this.datosForm1.nombreUs,
      apellidosPersona: this.datosForm1.apellidoUs,
      fechaNacimientoPersona: this.datosForm3.fechaNacimiento,
      correoPersona: this.datosForm4.correoUs,
      codigoDaneMunicipio: 6768
    };

    this.cedulaUsuario.guardarCedula(this.datosForm2.cedulaUsuario);

    this.usuariosService.guardarUsuarios(informacionUsuario)
    .subscribe(
      res => {
        if (res.ok === true) {
          this.openSnackBar('Registro exitoso');
          this.router.navigate(['/login']);
        }
      },
      err => {
        if (err.error.ok === false) {
          this.openSnackBar('Ya se encuentra registrado');
          this.router.navigate(['/login']);
        }
      }
    );


  }

  //MatSnackBar
  openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      duration: 3600,
    });
  }




}



/**
 * Form 1

nombreUs:
apellidoUs:
ciudadUs:


Form2

generoUsuario:
cedulaUsuario:
lugarUsuario:


Form 3

fechaNacimiento:

Form 4

correoUs:
keyUs:
againKeyUs:
 *
 *
 */
