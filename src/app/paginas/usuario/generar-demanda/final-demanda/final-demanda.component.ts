import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {LocalStorageService} from '../../../../services/localStorage/local-storage.service';
import { ConflictoCesantias } from '../../../../models/ConflictoCesantias';
import {FinalDemandaService} from '../../../../services/final-demanda/final-demanda.service'

@Component({
  selector: 'app-final-demanda',
  templateUrl: './final-demanda.component.html',
  styleUrls: ['./final-demanda.component.css']
})
export class FinalDemandaComponent implements OnInit {
  formularioNoPagoSalario: FormGroup;
  formcheked: boolean;
  dataOfConflict: any;
  conflictoDsjcD: any;
  conflictoSalarioD: any;
  conflictoVacasD: any;
  conflictoCesantiasD: any;
  conflictoPrimasD: any;
  conflcitosSeleccionados: any;

  constructor(
    private formBuilder: FormBuilder,
    private router_: Router,
    private activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    private localStorageService: LocalStorageService,
    private finalDemandaService: FinalDemandaService
  ) {
    this.dataOfConflict = JSON.parse(localStorage.getItem('dataConflictos'));
  }

  ngOnInit() {
  }

  solicitarPDF () {
    if (this.detectarConflictoContactaAbogado()) {
    this.snackBar.open('No es posible generar demanda, un abogado se pondrá en contacto contigo', '', {
      duration: 2500,
    });
  } else {
    this.snackBar.open('En breve se generá su demanda', '', {
      duration: 2500,
    });
  }

  console.log(this.obtenerDatosConflictos ());

  this.finalDemandaService.guardarTodosConflictos(this.obtenerDatosConflictos ()).
  subscribe( (resul) => {
    console.log(resul);
  }, error => {
    console.log(error);
  });

}

  detectarConflictoContactaAbogado(): any {
    if ( this.dataOfConflict.noPagoARL === true ||
      this.dataOfConflict.noPagoPensiones === true ||
      this.dataOfConflict.noPagoHorasExtras === true ||
      this.dataOfConflict.noPagoFestiDomini === true
      ) {
        return true;
      } else {
        return false;
      }
  }

  obtenerDatosConflictos (): any {
    this. datosConflictoDSJC();
    this.datosConflictoSalario();
    this.datosConflictoVacas();
    this.datosConflictoCesantias ();
    this.datosConflictoPrimas ();


    const dataConflictos = {
      conflictoDespidoSJC: this.conflictoDsjcD.conflictoDSJC,
      conflictoPagoSalario: this.conflictoSalarioD.existe,
      conflictoVacaciones: this.conflictoVacasD.existe,
      conflictoCesantias: this.conflictoCesantiasD.existe,
      conflictoPrimas: this.conflictoPrimasD.existe,
      conflictosContactaAbogado: this.detectarConflictoContactaAbogado(),
      idDemandaPersonaNatural: localStorage.getItem('idDemandaNatural'),
      idDemandaEmpresa: localStorage.getItem('idDemandaEmpresa'),
      fechaInicioContrato: this.localStorageService.getDataContrato('inicio'),
      tipoContrato: this.localStorageService.getDataContrato('tipo'),
      fechaFinalContrato: this.localStorageService.getDataContrato('final'),
      fechaDespido: this.conflictoDsjcD.fechaDespido,
      fechaInicioNoPago: this.conflictoSalarioD.inicio,
      fechaFinalNoPagoSalario: this.conflictoSalarioD.final,
      fechaUltimasVacaciones: this.conflictoVacasD.inicio,
      fechaFinalNoPagoVacaciones: this.conflictoVacasD.final,
      fechaUltimasCesantiasPagadas: this.conflictoCesantiasD.inicio,
      fechaFinalNoPagoCesantias: this.conflictoCesantiasD.final,
      fechaUltimaPrimaPagada: this.conflictoPrimasD.inicio ,
      fechaFinalNoPagoPrima: this.conflictoPrimasD.final

    };
    return dataConflictos;

  }

  datosConflictoDSJC() {

    this.conflcitosSeleccionados = this.localStorageService.getConflictosSeleccionados();

    if (this.conflcitosSeleccionados.despidoInjustificado === null) {
      this.conflictoDsjcD = {
        conflictoDSJC: false,
        fechaDespido: null
      };
    } else {
      this.conflictoDsjcD = {
        conflictoDSJC: true,
        fechaDespido: this.localStorageService.getConflictoDSJC()
      };
    }

  }

  datosConflictoSalario () {
    const dataSalario = this.localStorageService.getConflictoPagoSalario();
    if ( this.conflcitosSeleccionados.noPagoSalario === null) {
      this.conflictoSalarioD = {
        existe: false,
        inicio: null ,
        final: null
      };
    } else {
      this.conflictoSalarioD = {
        existe: true,
        inicio: dataSalario.fechaNoPagoSalario ,
        final: dataSalario.fechaFinalNoPagoSalario
      };

    }

  }


  datosConflictoVacas () {
  const dataVacas = this.localStorageService.getConflictoVacaciones();
    if ( this.conflcitosSeleccionados.noPagoVacaciones === null) {
      this.conflictoVacasD = {
        existe: false,
        inicio: null ,
        final: null
      };
    } else {
      this.conflictoVacasD  = {
        existe: true,
        inicio: dataVacas.fechaInicioNoPagoVacaciones ,
        final:  dataVacas.fechaFinalNoPagoVacaciones
      };

    }

  }


  datosConflictoCesantias () {
    const dataCesantias = this.localStorageService.getConflictoCesantias();
    if ( this.conflcitosSeleccionados.noPagoCesantias === null) {
      this.conflictoCesantiasD = {
        existe: false,
        inicio: null ,
        final: null
      };
    } else {
      this.conflictoCesantiasD  = {
        existe: true,
        inicio: dataCesantias.fechaInicioNoPagoCesantias ,
        final:  dataCesantias.fechaFinalNoPagoCesantias
      };

    }

  }


  datosConflictoPrimas () {

    const dataPrimas = this.localStorageService.getConflictoPrimas();
    if ( this.conflcitosSeleccionados.noPagoPrimas === null) {
      this.conflictoPrimasD = {
        existe: false,
        inicio: null ,
        final: null
      };
    } else {
      this.conflictoPrimasD = {
        existe: true,
        inicio: dataPrimas.inicioNoPagoPrima,
        final:  dataPrimas.finalNoPagoPrima
      };

    }

  }






}
