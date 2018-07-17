import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatCardHeader, MatCardContent, MatCardActions, MatCard } from '@angular/material';

import { CoursesComponent } from './courses.component';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCard
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [
        RouterModule.forRoot(
          []
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
