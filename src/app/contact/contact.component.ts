import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  address = [
    'Jalandhar Road,',
    'Opposite Bawa lal wani school',
    'Kapurthala, Punjab India'
  ]

  phones = [
    '+91-9417540046' ,
    '+91-9888213040'
  ]

  email = 'citimaxenterprises@gmail.com';

  gMapId = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.45764142941!2d-80.4946381845088!3d43.451042079128726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f36b2da269%3A0xe24562dfa877521b!2s183+King+St+W%2C+Kitchener%2C+ON+N2G+1A7!5e0!3m2!1sen!2sca!4v1527865612018"

}
