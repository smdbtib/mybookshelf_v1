import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  // Atribuindo o status da authentication do user
  userLogged$ = authState(this.userFb);

  // (Auth) módulo de interface do fire/auth feita pelo comando do ng add @angular/fire
  constructor( private userFb: Auth,
  ) { }

  //MÉTODOS - login e logout
  userLogin(userMail:string, userPassword: string){
    return from(signInWithEmailAndPassword(this.userFb, userMail, userPassword));
  }
  logoutUser(){
    return from(this.userFb.signOut());
  }

  registerUser(name:string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.userFb, email, password))
    .pipe( //(Pipe)  Fazer um desvio
      switchMap(({user})=> updateProfile(user, {displayName: name}))
    )
  }
}
