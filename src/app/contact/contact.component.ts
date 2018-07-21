import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer){}
  
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  companyName = "CityMax Enterprises";
  founder = "Gaurav Tandon";

  address = [
    'Jalandhar Road,',
    'Opposite Bawa-Lalvani Public school',
    'Kapurthala, Punjab India'
  ]

  phones = [
    '+91-9417540046' ,
    '+91-9888213040'
  ]

  email = 'citimaxenterprises@gmail.com';

  gMapId = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13626.027609155175!2d75.4005254!3d31.3725837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x635ffc3ebf72dd53!2sBawa-Lalvani+Public+School!5e0!3m2!1sen!2sca!4v1531670869667";

}
