import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase2 from 'firebase/app';
import { AuthService } from '../pages/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  public profile: {};

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  create_Usuario(record, id, collection) {
    return this.firestore.collection(collection).doc(id).set(record);
  }

  read_Usuario(collection) {
    return this.firestore.collection(collection).get();
  }

  update_Student(recordId, record) {
    this.firestore.doc('cliente/' + recordId).update(record);
  }

  delete_Usuario(recordId, collection) {
    this.firestore.doc(collection + '/' + recordId).delete();
  }


  read_data(collection) {
    this.firestore.collection(collection).doc(this.authService.getAuth().currentUser.uid).valueChanges().subscribe((res: any) => {
      localStorage.setItem('profile', res.type);
    });
  }

}
