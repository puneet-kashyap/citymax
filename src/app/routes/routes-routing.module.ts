import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactComponent } from '../contact/contact.component';
import { CourseComponent } from '../courses/course/course.component';
import { CoursesComponent } from '../courses/courses.component';
import { HomeComponent } from '../home/home.component';
import { InquiryComponent } from '../inquiry/inquiry.component';
import { StudiesComponent } from '../studies/studies.component';
import { AdminChatComponent } from '../chat/admin-chat/admin-chat.component';
import { SigninComponent } from '../signin/signin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'inquiry',
    component: InquiryComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'study-in-canada',
    component: StudiesComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'study-in-australia',
    component: StudiesComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'study-in-newzealand',
    component: StudiesComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'undergraduate',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'vocational',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'spendingyear',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'internship',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'juniorandhigh',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'language',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'summercamp',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'semester',
    component: CourseComponent,
    data: { title: 'CitiMax Enterprises' }
  },
  {
    path: 'admin',
    component: AdminChatComponent,
    data: { title: 'CitiMax Admin' }
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'SignIn Admin' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
