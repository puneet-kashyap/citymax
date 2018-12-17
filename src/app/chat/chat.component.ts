import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogflowService } from './dialogflow.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private dialogflowService: DialogflowService) {}
  @ViewChild('scrollMe')
  private myScrollContainer: ElementRef;
  inputMsg = '';
  chatMessages = [];
  subscription: Subscription;
  @HostListener('window:beforeunload', ['$event'])
  @Input()
  chatDbMessages: any;
  beforeunloadHandler(event) {
    // this.endChat();
  }

  ngOnInit() {
      this.subscribeToChat();
  }

  ngOnChanges() {
    this.subscribeToChat();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  endChat() {
    this.dialogflowService.msgToDb({
      msg: 'User left the chat session',
      msgFrom: 'user'
    });
  }

  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  subscribeToChat() {
    this.subscription = this.dialogflowService.items.subscribe(data => {
      if (data) {
        this.chatMessages = data['chat'];
      }
    });
  }

  onSubmit(form: NgForm) {
    let user = 'user';
    if (this.chatDbMessages) {
      user = 'bot';
    }
    if (form.valid) {
      this.dialogflowService.msgToDb({ msg: form.value.msg, msgFrom: user });
      if (!this.chatDbMessages) {
        this.dialogflowService.getResponse(form.value.msg).subscribe(res => {
          this.dialogflowService.msgToDb({ msg: res, msgFrom: 'bot' });
        });
      }
      form.resetForm();
    }
  }
}
