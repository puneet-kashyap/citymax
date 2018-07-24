import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import { environment } from '../environments/environment';
declare var require: any;

const firebase = require('firebase/app');

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    firebase.firestore().settings({ timestampsInSnapshots: true });
  }
  app = !firebase.apps.length ? firebase.initializeApp(environment.firebase) : firebase.app();
  db = firebase.firestore();

  writeToDatabase(collection, dataObj) {
    this.db.collection(collection).add(dataObj)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

}
