import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';
import { CourseComponent } from './course.component';


describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
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

  it('should get Course name', fakeAsync(() => {
    spyOn(component, 'getCourseName').and.returnValue('undergraduate');
    expect(component.getCourseName()).toEqual('undergraduate');
  }));
});
