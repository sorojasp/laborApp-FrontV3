import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { FormBuilder } from '@angular/forms';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe( 'Formulario Valido', () => {


  let component: SignInComponent;

  beforeEach(() => {

    component = new SignInComponent(null, new FormBuilder(), null, null);

  });

  it('Debe crear un formulario con dos campos, email y password', () => {
    expect( component.formularioSignIn.contains('email') ).toBeTruthy()
    expect( component.formularioSignIn.contains('password') ).toBeTruthy()
  });

  it('El email debe ser obligatorio', () => {

    let campo = component.formularioSignIn.get('email')
    campo.setValue('');
    expect( campo.valid ).toBeFalsy();

  })

  it('El email debe ser valido', () => {

    let campo = component.formularioSignIn.get('email')
    campo.setValue('');
    expect( campo.valid ).toBeFalsy();
    campo.setValue('dd@');
    expect( campo.valid ).toBeFalsy();
    campo.setValue('dd@dd.com')
    expect( campo.valid ).toBeTruthy();

  })
  it('La contrasena debe ser valido', () => {

    let campo = component.formularioSignIn.get('password')
    campo.setValue('');
    expect( campo.valid ).toBeFalsy();
    campo.setValue('dd@dd.com')
    expect( campo.valid ).toBeTruthy();

  })

})
