import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})

export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  create_NewStudent(record) {
    return this.firestore.collection('cliente').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('cliente').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('cliente/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('cliente/' + record_id).delete();
  }
}