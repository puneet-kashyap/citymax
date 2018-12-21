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

  app = !firebase.apps.length
    ? firebase.initializeApp(environment.firebase)
    : firebase.app();
  db = firebase.firestore();
  auth = firebase.auth();
  messaging;
  notificationBrowser: boolean = false ;
  hasNotificationToken: boolean = false;

  private user;

  constructor() {
    firebase.firestore().settings({ timestampsInSnapshots: true });
    this.initMessaging();
  }

  initMessaging = () => {
    if (firebase.messaging.isSupported()) {
      this.notificationBrowser = true;
      this.messaging = firebase.messaging();
      this.messaging.usePublicVapidKey(environment.vapidKey);
      this.hasToken();
      this.recieveMessages();
    } else {
      console.log('Cloud Messaging enabled : ', firebase.messaging.isSupported());
    }
  }

  setFirebaseUser = user => {
    this.user = user;
  }

  getFirebaseUser = () => {
    console.log(firebase.auth().currentUser ? firebase.auth().currentUser.displayName : 'Guest');
    return firebase.auth().currentUser;
  }

  requestNotificationPermission = () => {
    const that = this;
    this.messaging.requestPermission().then(function() {
      console.log('Notification permission granted.');
      that.getMsgToken();
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
  }

  recieveMessages() {
    this.messaging.onMessage(function (payload) {
      console.log('onMessage: ', payload);
    });
  }

  hasToken = () => {
    this.messaging.getToken().then((token) => {
      this.hasNotificationToken = token ? true : false;
    })
  }

  getMsgToken = () => {
    const that = this;
    this.messaging.getToken().then(function (currentToken) {
      if (currentToken) {
        console.log(currentToken);
        that.writeToDatabase('Tokens', {token : currentToken});
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    })
      .catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
      });
  }


  writeToDatabase(collection: string, dataObj: {}) {
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
