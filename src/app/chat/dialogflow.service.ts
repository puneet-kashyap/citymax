import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { v1 as uuid } from "uuid";

@Injectable({
  providedIn: "root"
})
export class DialogflowService{
  chatInit = false;
  collection = "Chats";
  sessionId: string = this.localSessionId();
  items: Observable<{}>;

  constructor(private http: Http, private db: AngularFirestore) {
    this.items = this.db.collection(this.collection).doc(this.sessionId).valueChanges();
  };

  private localSessionId() {
    if (!window.sessionStorage.sessionId) {
      const uniqueId = uuid();
      try {
        window.sessionStorage.setItem('sessionId',uniqueId)
      }catch (e) {
        console.error(e)
      }
      return uniqueId;
    } else {
      return window.sessionStorage.sessionId
    } 
  }

  public setSessionId(session) {
    this.chatInit = true;
    this.sessionId = session;
    this.items = this.db.collection(this.collection).doc(session).valueChanges();
  }

  public msgToDb(msgObj) {
    msgObj.timeStamp = Date.now();
    if (this.chatInit) {
      this.db.collection(this.collection).doc(this.sessionId).update({
        chat: firebase.firestore.FieldValue.arrayUnion(msgObj)
      })
    } else {
      this.db.collection(this.collection).doc(this.sessionId).set({
        chat: [msgObj]
      });
      this.chatInit = true;
    };
  };

  public getResponse(msg) {
    return this.http
      .get(
        `https://us-central1-citymax-faacf.cloudfunctions.net/api/chat?msg=${msg}&session=${this.sessionId}`
      )
      .pipe(
        map(res => {
          return res["_body"];
        })
      );
  };

  public getAllChatSessions =  this.db.collection(this.collection).snapshotChanges();
  public getChatSession(session) {
    return this.db.collection(this.collection).doc(session).snapshotChanges();
  };

  public deleteSession(sessionId) {
    this.db.collection(this.collection).doc(sessionId).delete().then(() => {
        console.log(`Document ${sessionId} successfully deleted!`);
      })
  }
}
