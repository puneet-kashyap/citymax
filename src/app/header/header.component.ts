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
    window.onscroll = this.shrink;
  }

  shrink() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("brand").classList.remove("shrink")
    } else {
      document.getElementById("brand").classList.add("shrink")
    }
  }

  rightLogo = require('../../assets/images/globeBooks.png');

  routes = [
    { routeLink: '/', routeName: 'Home' },
    { routeLink: '/courses', routeName: 'Courses' },
    { routeLink: '/inquiry', routeName: 'Inquiry' },
    { routeLink: '/contact', routeName: 'Contact Us' },
  ]

}
