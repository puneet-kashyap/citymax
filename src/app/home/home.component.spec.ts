import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MatCardTitle, MatIcon, MatCardContent, MatCard } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from '../contact/contact.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CarouselComponent,
        MatCardTitle,
        MatIcon,
        MatCardContent,
        MatCard,
        ContactComponent
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
