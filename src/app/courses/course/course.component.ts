import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  description: string[];
  image: string;
  title: string;
  header: string;
  collection: Observable<any[]>;

  constructor(private router: Router, private db: AngularFirestore) {
    this.collection = db.collection('courses').valueChanges();
  }

  ngOnInit() {
    this.getData(this.getCourseName());
  }

  getData(course) {
    this.collection.subscribe(data => {
      this.image = data['0'][course].img;
      this.description = data[0][course].description;
      this.header = data[0][course].header;
      this.title = data[0][course].title;
    });
  }

  getCourseName() {
    return this.router.url.replace('/', '');
  }

}
