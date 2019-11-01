import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(public firestore: AngularFirestore) { }
  create(id, record, collection) {
    return this.firestore
      .collection(collection)
      .doc(id)
      .set(record);
  }
}
