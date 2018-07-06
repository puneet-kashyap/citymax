import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = [
    {
      name: 'Vocational Courses',
      img: `https://images.unsplash.com/photo-1527612820672-5b56351f7346?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f1bca7d033cdb9afb6a675c2e2601e2&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'Counseling are done for graduate and post graduate programme learners. Since we have list of affiliated colleges and Universities in all leading countries, we render services in letting students be aware to follow their willing course, subjects and internships in their potential countries. Our counseling is just a step in direction of your successful future. With your hard work and our devotion, you will make us proud with your successful fame.'
    },
    {
      name: 'Internship In Overseas',
      img: `https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=948c133e4d7f4d9403c0e23c49a10de8&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'Practical knowledge is far more important than theoretical education. Whether you are in India or abroad, spending time for internship abroad matters a lot. With strong foundation of any course, practicing new, exploring things from more expertise are always good. This will give you exposure that leads to many successful opportunities to open. '
    },
    {
      name: 'Junior & High School Programmes',
      img: `https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=891fe858de061305b9d58986c3970d60&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'We are so obliged and satisfied to make your child well - prepared to study abroad in Junior or High School. We are here to teach them their way to be in Junior and High School. Our experienced staff is here to teach and clear children\'s hesitation and confidence about their Junior and High School Programmes. This also include their stay at Schools and counseling whenever they require. '
    },
    {
      name: 'Language Programmes',
      img: `https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5dcdfe3755e6a685cc76d0d806dc217d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'At CityMax Enterprise , we are promoters of foreign languages, providing you with the option to choose from the list of best language schools available around the globe. Before migrating to any country you need to be well-versed with the native language, let it be English, you need to be fluent in English in order to settle in any English speaking country. '
    },
    {
      name: 'Summer Camps',
      img: `https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1110ecf3ce9e4184d4676c54dec0032d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'Summer camps or enjoyment camps in holidays are best way to let your child explore new things, have new mates, and learn a lot. We seek where your kids, children feel full enjoyment along with immense security. We look into arranging summer camps, full of energy and enjoyment, that is also full of knowledge. All our work is done under keen supervision of trainers. We assure you to make your child\'s holidays Enjoyable and Learning. '
    },
    {
      name: 'Semester Abroad',
      img: `https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2523370d1085a679451aecbca3b136&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'Alike spending a year abroad, studying a semester abroad also holds a lot of value. Along with study, you can gain various privileges of learning new things, practically and intellectually. This would help in getting more credits along with your experience of learning new and latest technology in Fine Arts, Management, Sciences or IT and other fields. So grab all opportunities to make your future brighter ever. '
    },
    {
      name: 'Undergraduate & Post Graduate Courses',
      img: `https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70446b0aa38441eaf64c0650694b3de0&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb`,
      description: 'Counseling are done for graduate and post graduate programme learners. Since we have list of affiliated colleges and Universities in all leading countries, we render services in letting students be aware to follow their willing course, subjects and internships in their potential countries. Our counseling is just a step in direction of your successful future. With your hard work and our devotion, you will make us proud with your successful fame.'
    }
  ]

}
