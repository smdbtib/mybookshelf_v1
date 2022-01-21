import { AuthFirebaseService } from './../servicosInterface/auth-firebase.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Firestore } from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { loadavg } from 'os';
import { error } from 'console';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordConfirmed: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss'],
})
export class AppRegisterComponent implements OnInit {

  registerForm = this.registerBuilder.group(
    // CRIANDO VARIÁVEL PARA OS CAMPOS DO FORMULÁRIO
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]), // VALIDAÇÃO DUPLA PREENCHIMENTO E VALOR
      password: new FormControl('', Validators.required), // CRIANDO VARIÁVEIS DE FORM CONTROL E VALIDANDO OS DADOS COM required e validator DE VALIDATOR
      confirmPassword: new FormControl('', Validators.required),

    },
    { validators: passwordMatchValidator() }
  );

  //CONSTRUCTOR
  constructor(
    private registerBuilder: FormBuilder,
    private registerFb: AuthFirebaseService,
    private toast: HotToastService,
    private route: Router,
  ) {}

  get name() {return this.registerForm.get('email');}
  get email() {return this.registerForm.get('email');}
  get password() {return this.registerForm.get('password');}
  get confirmPassword() {return this.registerForm.get('confirmPassword');}

  sendRegister() {
    // 1º Verificar o formulário de cadastro
    if (!this.registerForm.valid) {
      //Fazer uma tarefa tratar erro de validação de cadastro
      return;
    }
    //Armazenar os valores
    const {name, email, password} = this.registerForm.value;
    this.registerFb.registerUser(name, email, password)
    .pipe(
      this.toast.observe({
        success: 'Register performed with success',
        loading: 'Send information',
        error: ({message}) => `Have a problem: #BS${message}`
      })
    ).subscribe(() =>{
      this.route.navigate(['/'])
    });
  }
  ngOnInit(): void {}
}
