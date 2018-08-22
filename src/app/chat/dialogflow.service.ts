import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DialogflowService {
  constructor(private http: Http) {}

  public getResponse(msg): any {
    return this.http
      .get(
        `https://us-central1-citymax-faacf.cloudfunctions.net/api/chat?msg=${msg}`
      )
      .pipe(
        map(res => {
          return res["_body"];
        })
      );
  }
}
