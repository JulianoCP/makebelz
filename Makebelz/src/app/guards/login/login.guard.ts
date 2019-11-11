import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../pages/authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private perfil: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    // private firestore: AngularFirestore
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) { this.router.navigate(['home']); }
        resolve(!user ? true : false);
      });
    });
  }
}



// canActivate(): Promise<boolean> {
//   return new Promise(resolve => {
//     this.authService.getAuth().onAuthStateChanged(user => {
//       this.perfil = this.firestore.collection('perfil').snapshotChanges();
//       console.log(this.perfil, user);
//       if (user && this.perfil) {
//         this.router.navigate(['home']);
//       } else {
//         this.router.navigate(['cad-cliente']);
//       }
//       resolve(!user ? true : false);
//     });
//   });
// }
