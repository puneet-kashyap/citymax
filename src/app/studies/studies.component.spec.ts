import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StudiesComponent } from './studies.component';
import { environment } from '../../environments/environment';

describe('StudiesComponent', () => {
  let component: StudiesComponent;
  let fixture: ComponentFixture<StudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudiesComponent],
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
    fixture = TestBed.createComponent(StudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
