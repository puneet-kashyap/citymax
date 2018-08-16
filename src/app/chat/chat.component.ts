import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  constructor() {}

  inputMsg: string = "";

  msgGroup:{}[] = [];

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value.msg);
      this.msgGroup.push({user: form.value.msg, img: 'user'});
      form.reset();
    }
  }
}
