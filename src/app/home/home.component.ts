import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    'Free assessment for admission',
    'Arrange admissions in overseas universities/institutions.',
    'Process visa application',
    'Logging student visa application on behalf of student, with the relevant embassy or high commission',
    'Make travel arrangements on approval of student visa'
  ]

  links = [
    { name: 'Study in Canada', hyperlink: '/' },
    { name: 'Study in Australia', hyperlink: '/inquiry'},
    { name: 'Study in New Zealand', hyperlink: '/courses'},
    { name: 'Study in UK', hyperlink: '/contact'},
    { name: 'Study in America', hyperlink: '/inquiry'},
    { name: 'Other Destinations', hyperlink: '/inquiry'},
  ]

}
