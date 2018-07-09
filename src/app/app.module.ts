import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { CoursesComponent } from './courses/courses.component';
import { StudiesComponent } from './studies/studies.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: "CityMax Enterprises"}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: "CityMax Enterprises"}
  },
  {
    path: 'inquiry',
    component: InquiryComponent,
    data: { title: "CityMax Enterprises"}
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: "CityMax Enterprises"}
  },
  {
    path: 'study-in-canada',
    component: StudiesComponent,
    data: { title: "CityMax Enterprises"}
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
    StudiesComponent
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
    RouterModule.forRoot(
      appRoutes
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
