import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  text="hello"
  constructor() { }

  ngOnInit() {
  }

  links = [
    { name: 'Home', hyperlink: '/' },
    { name: 'Inquiry', hyperlink: '/inquiry'},
    { name: 'Courses', hyperlink: '/courses'},
    { name: 'Contact Us', hyperlink: '/contact'},
    { name: 'About Us', hyperlink: '/inquiry'},
    { name: 'Vocational Courses', hyperlink: '/inquiry'},
    { name: 'Internship In Overseas', hyperlink: '/inquiry'},
    { name: 'Junior And High School Programmes', hyperlink: '/inquiry'},
    { name: 'Language Programmes', hyperlink: '/inquiry'},
    { name: 'Summer Camps', hyperlink: '/inquiry'},
    { name: 'Membership', hyperlink: '/inquiry'},
    { name: 'Semester Abroad', hyperlink: '/inquiry'},
    { name: 'Undergraduate & Post Graduate Courses', hyperlink: '/inquiry'}

  ]

}
