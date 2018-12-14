import { Component, OnInit } from '@angular/core';
import { DialogflowService } from '../dialogflow.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {
  constructor(private dialogflowService: DialogflowService) {}
  private chatSessions = [];
  chatDbMessages = [];
  display = true;
  chatSessionSet = new Set();
  selectedSession: number;

  updateChat(chatArray) {
    this.chatDbMessages = [];
    if (chatArray) {
      this.chatDbMessages.push(chatArray.chat);
    }
  }

  ngOnInit() {
    this.dialogflowService.getAllChatSessions.subscribe(data => {
      if (data) {
        data.forEach(doc => {
          this.chatSessionSet.add(doc.payload.doc.id);
        });
        this.chatSessions = Array.from(this.chatSessionSet);
      }
    });
  }

  onDeleteSession(session) {
    this.chatSessions.splice(this.selectedSession, 1);
    this.dialogflowService.deleteSession(session);
  }

  showBadge(index) {
    return this.selectedSession === index ? true : false;
  }

  getChatSession(session) {
    this.selectedSession = this.chatSessions.indexOf(session);
    this.dialogflowService.setSessionId(session);
    this.dialogflowService.getChatSession(session).subscribe(data => {
      this.updateChat(data.payload.data());
    });
  }
}
