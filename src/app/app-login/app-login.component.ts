import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthFirebaseService } from '../servicosInterface/auth-firebase.service';

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

  constructor(
    private loginBuilder: FormBuilder,
    private authFirebaseService: AuthFirebaseService,
    @Inject(MAT_DIALOG_DATA) public contentMsg: string,
    ) {}

    get email(){
      return this.loginForm.get('email');
    }

    get password(){
      return this.loginForm.get('password');
    }
    onSubmit(): void {
      alert('Thanks!');
  }
}
