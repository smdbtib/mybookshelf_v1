import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent {

  // CRIANDO VARIÁVEL PARA OS CAMPOS DO FORMULÁRIO
  loginForm = this.loginBuilder.group({
                                // VALIDAÇÃO DUPLA PREENCHIMENTO E VALOR
    email: new FormControl('', [Validators.required, Validators.email]),
    // CRIANDO VARIÁVEIS DE FORM CONTROL E VALIDANDO OS DADOS COM required e validator DE VALIDATOR
    password: new FormControl('', Validators.required),
  });

  constructor(private loginBuilder: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
