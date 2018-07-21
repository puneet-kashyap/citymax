import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { tick } from '../../../node_modules/@angular/core/src/render3';


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
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
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

  it('courses names should be displayed', () => {
    let result = fixture.debugElement.queryAll(By.css('mat-card-header.card>h3'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toEqual(component.courses[i].name);
    });
  });

  it('images for course should be displayed', () => {
    let result = fixture.debugElement.queryAll(By.css('img'));
    result.forEach((x, i) => {
      expect(x.nativeElement.src).toEqual(component.courses[i].img);
      expect(x.nativeElement.alt).toEqual(component.courses[i].name);
    });
  });

  it('descriptions for course should be displayed', () => {
    let result = fixture.debugElement.queryAll(By.css('mat-card-content>p'));
    result.forEach((desc, i) => {
      expect(desc.nativeElement.textContent).toEqual(component.courses[i].description);
    });
  });

  it('deatils button for course should be displayed', async(() => {
    let result = fixture.debugElement.queryAll(By.css('mat-card-actions>button'));
    result.forEach((x, i) => {
      expect(x.nativeElement.getAttribute('ng-reflect-router-link')).toEqual('/' + component.courses[i].id);
    });
  }));
});
