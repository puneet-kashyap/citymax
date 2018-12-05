import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  app = 'CitiMax Enterprises';
  email = 'info@citimaxenterprises.com';

  getYear(){
    return new Date().getFullYear();
  }

  links = [
    { name: 'Home', hyperlink: '/' },
    { name: 'Inquiry', hyperlink: '/inquiry' },
    { name: 'Courses', hyperlink: '/courses' },
    { name: 'Contact Us', hyperlink: '/contact' },
    { name: 'About Us', hyperlink: '/aboutus' },
    { name: 'Vocational Courses', hyperlink: '/vocational' },
    { name: 'Internship In Overseas', hyperlink: '/internship' },
    { name: 'Junior And High School Programmes', hyperlink: '/juniorandhigh' },
    { name: 'Language Programmes', hyperlink: '/language' },
    { name: 'Summer Camps', hyperlink: '/summercamp' },
    { name: 'Semester Abroad', hyperlink: '/semster' },
    { name: 'Spending A Year Abroad', hyperlink: '/spendingyear' },
    { name: 'Undergraduate & Post Graduate Courses', hyperlink: '/undergraduate' },
    { name: 'Sign In', hyperlink: '/signin' }
  ]

}
