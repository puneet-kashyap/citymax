import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  courses;
  items: Observable<any[]>;

  constructor(private router: Router, private db: AngularFirestore) {
    this.items = db.collection('colleges').valueChanges();
  }

  ngOnInit() {
    this.getColleges();
  }

  getCountry() {
    return this.router.url.split('-')[2];
  }

  getColleges() {
    this.items.subscribe(data => {
      this.courses = data[0][this.getCountry()];
    });
  }
}
