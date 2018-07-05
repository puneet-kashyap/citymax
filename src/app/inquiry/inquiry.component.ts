import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  submitted = false;
  submittedForm;
  constructor() { }

  ngOnInit() {
  }

  options: string[] = ['America', 'Australia', 'Canada', 'United Kingdom', 'New Zealand', 'Other'];

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.submittedForm = form.value;
      this.submitted = true;
    }
}

}
