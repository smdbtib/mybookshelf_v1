import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    { validator: passwordMatchValidator() }
  );

  //CONSTRUCTOR
  constructor(private registerBuilder: FormBuilder) {}

  get name() {return this.registerForm.get('email');}
  get email() {return this.registerForm.get('email');}
  get password() {return this.registerForm.get('password');}
  get confirmPassword() {return this.registerForm.get('confirmPassword');}

  sendRegister() {

  }

  ngOnInit(): void {}
}
