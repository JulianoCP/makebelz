import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/pages/authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  private perfil: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: AngularFirestore,


  ) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) { this.router.navigate(['profile']); }
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