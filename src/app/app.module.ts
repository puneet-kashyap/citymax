import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { StudiesComponent } from './studies/studies.component';

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
    path: 'semster',
    component: CourseComponent,
    data: { title: "CitiMax Enterprises" }
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    InquiryComponent,
    CoursesComponent,
    StudiesComponent,
    CourseComponent,
    AboutusComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
