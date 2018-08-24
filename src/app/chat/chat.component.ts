import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { DialogflowService } from "./dialogflow.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollMe")
  private myScrollContainer: ElementRef;
  constructor(private dialogflowService: DialogflowService) {}

  inputMsg: string = "";
  chatMessages: {}[] = [];

  ngOnInit() {}
  ngAfterViewChecked() {}

  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.chatMessages.push({ msg: form.value.msg, msgFrom: "user" });
      this.dialogflowService.getResponse(form.value.msg).subscribe(res => {
        this.chatMessages.push({
          msg: res,
          msgFrom: "bot"
        });
      });
      form.resetForm();
    }
  }
}
