import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.firebaseService.fireUI();
  }
}
