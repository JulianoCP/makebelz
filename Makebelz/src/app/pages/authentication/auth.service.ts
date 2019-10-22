import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authentication: AngularFireAuth) { }

  login(login: Login) {
    return this.authentication.auth.signInWithEmailAndPassword(login.email, login.password);
  }

  register(login: Login) {
    return this.authentication.auth.createUserWithEmailAndPassword(login.email, login.password);
  }

  logout() {
    return this.authentication.auth.signOut();
  }

  getAuth() {
    return this.authentication.auth;
  }
}
