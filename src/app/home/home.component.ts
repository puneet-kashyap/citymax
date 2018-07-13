import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  services = [
    'Free assessment for admission',
    'Arrange admissions in overseas universities/institutions.',
    'Process visa application',
    'Logging student visa application on behalf of student, with the relevant embassy or high commission',
    'Make travel arrangements on approval of student visa'
  ]

  links = [
    { name: 'Study in Canada', hyperlink: '/study-in-canada' },
    { name: 'Study in Australia', hyperlink: '/study-in-australia'},
    { name: 'Study in New Zealand', hyperlink: '/study-in-newzealand'},
    { name: 'Study in UK', hyperlink: ''},
    { name: 'Study in America', hyperlink: ''},
    { name: 'Other Destinations', hyperlink: ''},
  ]

}
