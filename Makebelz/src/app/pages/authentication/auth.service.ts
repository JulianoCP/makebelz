import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public authentication: AngularFireAuth,
    ) { }

  login(login: Login) {
    return this.authentication.auth.signInWithEmailAndPassword(login.email, login.password);
  }

  register(login: Login) {
    return this.authentication.auth.createUserWithEmailAndPassword(login.email, login.password);
    // .then(data => {
    //   console.log('cliente inserido', data.credential);
    // }).catch (error => {
    //   console.log('erro ao inserir cliente');
    // });
  }

  logout() {
    return this.authentication.auth.signOut();
  }

  getAuth() {
    return this.authentication.auth;
  }
}
