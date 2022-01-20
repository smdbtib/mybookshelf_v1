import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

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

  hasUnitNumber = false;

  constructor(
    private loginBuilder: FormBuilder,
    private authFirebaseService: AuthFirebaseService,
    private toast: HotToastService,
    private rout: Router,
    @Inject(MAT_DIALOG_DATA) public contentMsg: string
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  loginFirebase(){
    if (!this.loginForm.valid) {
      return;
    }

    const {email, password} = this.loginForm.value;
    this.authFirebaseService.userLogin(email, password)
    .pipe(
      this.toast.observe({
        success: 'Login success, Thanks!',
        loading: 'Redirecting....',
        error: 'Error: credential invalid, confirme data'
      })
    ).subscribe(()=>{
      this.rout.navigate(['/cdd'])
    });
  }

}
