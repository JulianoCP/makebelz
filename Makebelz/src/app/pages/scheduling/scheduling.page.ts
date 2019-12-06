import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})
export class SchedulingPage implements OnInit {

  private readonly _profile = new BehaviorSubject<any>([]);
  readonly profile$ = this._profile.asObservable();

  public manicures = []

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const snapshot = await firebase.firestore().collection('Manicure').get()
    const dataManicure = snapshot.docs.map(doc => doc.data())

    dataManicure.map(man => {
      this.manicures.push(man)
    })
  }

}
