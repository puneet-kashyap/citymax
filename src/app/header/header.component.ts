import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  routes = [
    { routeLink: '/', routeName: 'Home' },
    { routeLink: '/courses', routeName: 'Courses' },
    { routeLink: '/inquiry', routeName: 'Inquiry' },
    { routeLink: '/contact', routeName: 'Contact Us' },
  ]

}
