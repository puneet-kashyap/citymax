import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { v1 as uuid } from "uuid";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";
import * as firebase from 'firebase';

@Injectable({
  providedIn: "root"
})
export class DialogflowService {
  chatInit = false;
  collection = "Chats"
  sessionId: string = uuid();
  items: Observable<{}>;

  constructor(private http: Http, private db: AngularFirestore) {
    this.items = this.db.collection(this.collection).doc(this.sessionId).valueChanges();
  }

  public msgToDb(msgObj) {
    msgObj.timeStamp = Date.now();
    if(this.chatInit) {
      this.db.collection(this.collection).doc(this.sessionId).update({
        chat: firebase.firestore.FieldValue.arrayUnion(msgObj)
      })
    } else {
      this.db.collection(this.collection).doc(this.sessionId).set({
        chat: [msgObj]
      });
      this.chatInit = true;
    }
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
  }
}
