import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {

  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('senhaInput') senhaInput!: ElementRef;

  email!: string;
  password!: string;

  //Injetar
  constructor(
    private loginService: LoginService
  ){
  }

  onSubmit(form: any) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }
      if(form.controls.password.invalid){
        this.senhaInput.nativeElement.focus();
        return;
      }

      return;
    }
    this.login();
  }

  login(){
    this.loginService.logar(this.email, this.password)
      .subscribe(
        response => {
          console.log('Sucesso! Logou!');
        },
        error =>{
          console.log('Deu ruim! Não logou!');
        }
      )
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return (
      form.controls[nomeControle].invalid && form.controls[nomeControle].touched
    );
  }
}
