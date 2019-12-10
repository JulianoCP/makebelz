import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../authentication/auth.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<any> {


  private readonly _profile = new BehaviorSubject<any>(null);
  readonly profile$ = this._profile.asObservable();

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
  //   this.profile$.subscribe(p => console.log('[profile$]', p));
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Promise.all([this.getProfile()]);
  }


  getProfile() {
    return new Promise((resolve, reject) => {
      this.firestore.collection('Profile').doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe(
        (res: any) => {
          // console.log(res);
          this._profile.next(res);
          resolve(res);
      },
      e => {
        console.log(e);
        reject(e);
      });
    });
  }

  get profile() {
    return this._profile.getValue();
  }

  set profile(data) {
    this._profile.next(data);
  }
}
