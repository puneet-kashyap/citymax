import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  services = [
    'Free assessment for admission',
    'Arrange admissions in overseas universities/institutions.',
    'Process visa application',
    'Logging student visa application on behalf of student, with the relevant embassy or high commission',
    'Make travel arrangements on approval of student visa'
  ];

  links = [
    { name: 'Study in Canada', hyperlink: '/study-in-canada' },
    { name: 'Study in Australia', hyperlink: '/study-in-australia' },
    { name: 'Study in New Zealand', hyperlink: '/study-in-newzealand' },
    { name: 'Study in UK', hyperlink: '' },
    { name: 'Study in America', hyperlink: '' },
    { name: 'Other Destinations', hyperlink: '' },
  ];

  homeContents = [
    `We were established in the year 2018 and is pioneer and leaders in Punjab state, India for referring students all across the globe.
     We hold a large number of representations for various universities, institute and schools all around the world.
     We hold a track record of sending huge number of students in the past.`,
    `Education is that mighty attribute that takes one on top of World\'s Successes and Achievements.
     Being educated sets you wise,practical and self- dependent and a foundation to lighten humanity for your community, nation and world.
     So with diversified thoughts and tastes we are here to render you services regarding Educating Abroad.`,
    `Education could be done anywhere according to ones\' requirements with the discipline of their interest.
     We offer guidance to Canada, Australia, New Zealand, USA, UK and other destinations.
     Now-a-days we have so many universities and affiliated institutes, that offer wide range of courses of various fields.`
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
