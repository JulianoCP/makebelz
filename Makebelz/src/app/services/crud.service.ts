import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})

export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  create_Usuario(record,id,collection) {
    return this.firestore.collection(collection).doc(id).set(record);
  }
 
  read_Usuario(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }
 
  update_Usuario(recordID,record,collection){
    this.firestore.doc(collection+ '/' + recordID).update(record);
  }
 
  delete_Usuario(record_id,collection) {
    this.firestore.doc(collection + '/' + record_id).delete();
  }
}