import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { CoursesComponent } from '../courses/courses.component';
import { HomeComponent } from '../home/home.component';
import { InquiryComponent } from '../inquiry/inquiry.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { StudiesComponent } from '../studies/studies.component';
import { CourseComponent } from '../courses/course/course.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'inquiry',
    component: InquiryComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'study-in-canada',
    component: StudiesComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'study-in-australia',
    component: StudiesComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'study-in-newzealand',
    component: StudiesComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'undergraduate',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'vocational',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'spendingyear',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'internship',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'juniorandhigh',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'language',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'summercamp',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
  {
    path: 'semester',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
