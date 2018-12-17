import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  constructor() {}

  title = 'About Us';
  header = `We were established in the year 2018 and is pioneer and leaders in Punjab state,
    India for referring students all across the globe.
    We hold a large number of representations for various universities,
    institute and schools all around the world. We are the only establishment in India,
    who are a member of all Chambers of Commerce & relevant associations &
    bodies in India and abroad.
    We hold a track record of sending huge number of students in the past.`;
  img = {
    src: require('../../assets/images/courses/undergraduate-course.jpg'),
    alt: 'About CitiMax Enterprises'
  };
  description = [
    ` Education is that mighty attribute that takes one on top of World's Successes and Achievements.
     Being educated sets you wise, practical and self- dependent and a foundation to lighten humanity for your community, nation and world.
      So with diversified thoughts and tastes we are here to render you services regarding Educating Abroad. `,
    ` Education could be done anywhere according to ones' requirements with the discipline of their interest.
     We offer guidance to Canada, Australia, New Zealand, USA, UK and other destinations.
      Now-a-days we have so many universities and affiliated institutes, that offer wide range of courses of various fields.`,
    ` Come to satisfy your queries regarding 'Education Abroad'..... `,
    ` We are a certified and proud members of :`
  ];
  members = [
    'AAERI (Association of Australian Education Representative in India)',
    'NAFSA Association of International Educators',
    'EAIE (European Association for International Education)',
    'QISAN (Quality International Study Abroad Network)',
    'Indo American Chamber of Commerce',
    'Indo Italian Chamber of Commerce',
    'Indo French Chamber of Commerce',
    'Indo German Chamber of Commerce',
    'Indo Belgium-Luxembourg Chamber of Commerce',
    'PHD Chamber of Commerce & Industry'
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
