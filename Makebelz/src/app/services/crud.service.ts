import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewStudent(record,id) {
    return this.firestore.collection('cliente').doc(id).set(record);
  }

  read_Students() {
    return this.firestore.collection('cliente').snapshotChanges();
  }

  update_Student(recordId, record) {
    this.firestore.doc('cliente/' + recordId).update(record);
  }

  delete_Student(recordId) {
    this.firestore.doc('cliente/' + recordId).delete();
  }
}
