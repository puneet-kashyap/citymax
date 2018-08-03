import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rightLogo = require('../../assets/images/globeBooks.png');

  routes = [
    { routeLink: '/', routeName: 'Home' },
    { routeLink: '/courses', routeName: 'Courses' },
    { routeLink: '/inquiry', routeName: 'Inquiry' },
    { routeLink: '/contact', routeName: 'Contact Us' },
  ]

}
