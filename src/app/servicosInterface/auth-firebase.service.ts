import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
                          // (Auth) módulo de interface do fire/auth feita pelo comando do ng add @angular/fire
  constructor( private userFb: Auth,
  ) { }

  //MÉTODOS - login e logout
  userLogin(userMail:string, userPassword: string){
    return from(signInWithEmailAndPassword(this.userFb, userMail, userPassword));
  }
  logout(){
    return from(this.userFb.signOut());
  }

}
