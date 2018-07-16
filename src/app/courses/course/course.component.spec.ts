import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireModule } from '../../../../node_modules/angularfire2';
import { AngularFirestoreModule } from '../../../../node_modules/angularfire2/firestore';
import { environment } from '../../../environments/environment';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        RouterModule.forRoot(
          []
        )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
