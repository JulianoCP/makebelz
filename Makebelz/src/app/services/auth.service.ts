import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authentication: AngularFireAuth) { }

  login(user: User) {
    return this.authentication.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.authentication.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.authentication.auth.signOut();
  }

  getAuth() {
    return this.authentication.auth;
  }
}
