import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

// snackBar
import {MatSnackBar} from '@angular/material';

// Modelos
import { Usuario } from '../../models/Usuario';
import {Persona} from '../../models/Persona';
// Servicios
import { UsuariosService} from '../../services/service.index';
import {PersonasService} from '../../services/Personas/personas.service';




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
  public datosForm1: any;
  public datosForm2: any;
  public datosForm3: any;
  public datosForm4: any;



 constructor(
   private usuariosService: UsuariosService,
   private personasService: PersonasService,
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

    /*

    const informacionUsuario: Usuario = {
      cedulaPersona: this.datosForm2.cedulaUsuario,
      nombresPersona: this.datosForm1.nombreUs,
      apellidosPersona: this.datosForm1.apellidoUs,
      fechaNacimientoPersona: this.datosForm3.fechaNacimiento,
      correoPersona: this.datosForm4.correoUs,
      codigoDaneMunicipio: 6768
    };
    */



    const informacionPersona: Persona = {
      tipoDocumentoPersona: 'CC', //  'CC' 'CE' 'Pasaporte' 'Carnet' 'Diplomatico'
      numeroDocumentoPersona: this.datosForm2.cedulaUsuario,
      nombresPersona: this.datosForm1.nombreUs,
      apellidosPersona: this.datosForm1.apellidoUs,
      fechaNacimientoPersona: this.datosForm3.fechaNacimiento,
      direccionPersona: ' ',
      generoPersona: this.datosForm2.generoUsuario,
      lugarExpedicionCedulaPersona: this.datosForm2.lugarUsuario,
      contrasenaPersona: this.datosForm4.keyUs,
      codigoCiudad: 85,
      correoPersona: this.datosForm4.correoUs  // ****como se envía el correo?
    };

    console.log(this.datosForm2);



    this.personasService.guardarPersona(informacionPersona)
    .subscribe(
      res => {
        if (res) {
          this.openSnackBar('Registro exitoso');
          this.router.navigate(['/login']);
        }
      },
      err => {
        if (err.error.ok === false) {
          this.openSnackBar('**Ya se encuentra registrado**');
          this.router.navigate(['/login']);
        }
      }
    );



/*

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

    */


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
