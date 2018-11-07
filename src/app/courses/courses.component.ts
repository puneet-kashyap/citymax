import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  buttonName = 'DETAILS';

  courses = [
    
    {
      id: 'internship',
      name: 'Internship In Overseas',
      img: require('../../assets/images/courses/internship-course.webp'),
      description: 'Practical knowledge is far more important than theoretical education. Whether you are in India or abroad, spending time for internship abroad matters a lot. With strong foundation of any course, practicing new, exploring things from more expertise are always good. This will give you exposure that leads to many successful opportunities to open. '
    },
    {
      id: 'juniorandhigh',
      name: 'Junior & High School Programmes',
      img: require('../../assets/images/courses/juniorandhigh.webp'),
      description: 'We are so obliged and satisfied to make your child well - prepared to study abroad in Junior or High School. We are here to teach them their way to be in Junior and High School. Our experienced staff is here to teach and clear children\'s hesitation and confidence about their Junior and High School Programmes. This also include their stay at Schools and counseling whenever they require. '
    },
    {
      id: 'language',
      name: 'Language Programmes',
      img: require('../../assets/images/courses/language-course.webp'),
      description: 'At CitiMax Enterprises , we are promoters of foreign languages, providing you with the option to choose from the list of best language schools available around the globe. Before migrating to any country you need to be well-versed with the native language, let it be English, you need to be fluent in English in order to settle in any English speaking country. '
    },
    {
      id: 'vocational',
      name: 'Vocational Courses',
      img: require('../../assets/images/courses/vocational-course.webp'),
      description: 'Counseling are done for graduate and post graduate programme learners. Since we have list of affiliated colleges and Universities in all leading countries, we render services in letting students be aware to follow their willing course, subjects and internships in their potential countries. Our counseling is just a step in direction of your successful future. With your hard work and our devotion, you will make us proud with your successful fame.'
    },
    {
      id: 'summercamp',
      name: 'Summer Camps',
      img: require('../../assets/images/courses/summer-camp.webp'),
      description: 'Summer camps or enjoyment camps in holidays are best way to let your child explore new things, have new mates, and learn a lot. We seek where your kids, children feel full enjoyment along with immense security. We look into arranging summer camps, full of energy and enjoyment, that is also full of knowledge. All our work is done under keen supervision of trainers. We assure you to make your child\'s holidays Enjoyable and Learning. '
    },
    {
      id: 'semester',
      name: 'Semester Abroad',
      img: require('../../assets/images/courses/semester-course.webp'),
      description: 'Alike spending a year abroad, studying a semester abroad also holds a lot of value. Along with study, you can gain various privileges of learning new things, practically and intellectually. This would help in getting more credits along with your experience of learning new and latest technology in Fine Arts, Management, Sciences or IT and other fields. So grab all opportunities to make your future brighter ever. '
    },
    {
      id: 'spendingyear',
      name: 'Spending A Year Abroad',
      img: require('../../assets/images/courses/spending-year.webp'),
      description: 'Spending a year abroad would enhance your course with positive and efficient credits. With this you are privileged in various respects like : marks scores, practical scores, experience of communication, meetings, conferences and loads more to learn from. Spending a year abroad will be a steep jump of career towards success. So choose your course for study or job, and we\'ll assist you to get your dream place.'
    },
    {
      id: 'undergraduate',
      name: 'Undergraduate & Post Graduate Courses',
      img: require('../../assets/images/courses/undergraduate-course.webp'),
      description: 'Counseling are done for graduate and post graduate programme learners. Since we have list of affiliated colleges and Universities in all leading countries, we render services in letting students be aware to follow their willing course, subjects and internships in their potential countries. Our counseling is just a step in direction of your successful future. With your hard work and our devotion, you will make us proud with your successful fame.'
    }
  ]

}
