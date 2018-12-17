import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  app = 'CitiMax Enterprises';
  email = 'info@citimaxenterprises.com';
  signInState: string;
  showAdmin: boolean;
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
    { name: 'Semester Abroad', hyperlink: '/semester' },
    { name: 'Spending A Year Abroad', hyperlink: '/spendingyear' },
    { name: 'Undergraduate & Post Graduate Courses', hyperlink: '/undergraduate'}
  ];

  ngOnInit() {
    this.firebaseService.auth.onAuthStateChanged(user => {
      this.signInState = user ? 'Sign Out' : 'Sign In';
      this.showAdmin = user ? true : false;
    });
  }

  getYear() {
    return new Date().getFullYear();
  }

  loginState() {
    if (this.signInState === 'Sign Out') {
      this.firebaseService.auth.signOut().then(() => {
        window.sessionStorage.removeItem('sessionId');
        console.log('User Signed Out');
      });
    }
  }


}
