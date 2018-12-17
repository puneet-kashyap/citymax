import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {}

  submitted = false;
  submittedForm;
  minDate = new Date();

  options: string[] = [
    'America',
    'Australia',
    'Canada',
    'United Kingdom',
    'New Zealand',
    'Other'
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedForm = form.value;
      this.submitted = true;
      this.firebaseService.writeToDatabase('Inquiry', form.value);
    }
  }
}
