import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import * as firebaseui from 'firebaseui';
declare var require: any;

const firebase = require('firebase/app');

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {
    firebase.firestore().settings({ timestampsInSnapshots: true });
  }
  app = !firebase.apps.length
    ? firebase.initializeApp(environment.firebase)
    : firebase.app();
  db = firebase.firestore();
  auth = firebase.auth();

  private user;

  setFirebaseUser = user => {
    this.user = user;
  }

  getFirebaseUser = () => {
    console.log(firebase.auth().currentUser ? firebase.auth().currentUser.displayName : 'Guest');
    return firebase.auth().currentUser;
  }

  writeToDatabase(collection, dataObj) {
    this.db
      .collection(collection)
      .add(dataObj)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  }

  fireUI = () => {
    const that = this;
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          that.setFirebaseUser(authResult.user.displayName);
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
          return true;
        }
      },
      signInSuccessUrl: '/admin',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image',
            size: 'invisible',
            badge: 'bottomright'
          },
          defaultCountry: 'IN'
        }
      ],
      tosUrl: '/',
      privacyPolicyUrl: '/',
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInFlow: 'popup'
    };
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start('#firebaseui-auth-container', uiConfig);
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }
}
