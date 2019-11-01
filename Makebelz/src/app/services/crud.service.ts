import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_Usuario(record, id, collection) {
    return this.firestore.collection(collection).doc(id).set(record);
  }

  read_Usuario(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  update_Student(recordId, record) {
    this.firestore.doc('cliente/' + recordId).update(record);
  }

  delete_Usuario(recordId, collection) {
    this.firestore.doc(collection + '/' + recordId).delete();
  }
}
