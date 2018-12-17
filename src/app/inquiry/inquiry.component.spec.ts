import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatCard,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { InquiryComponent } from './inquiry.component';

describe('InquiryComponent', () => {
  let component: InquiryComponent;
  let fixture: ComponentFixture<InquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryComponent, MatCard],
      imports: [
        FormsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display inquiry header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('div.reservation>mat-card>div>h3').textContent
    ).toEqual('Inquiry');
  });

  it('should display input field for name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[name=name]');
    nameInput.value = 'Puneet Kashyap';
    expect(nameInput.value).toEqual('Puneet Kashyap');
  });

  it('should display input field for email', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[name=email]');
    nameInput.value = 'test@kashyap.ca';
    expect(nameInput.value).toEqual('test@kashyap.ca');
  });

  it('should display input field for phone', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[name=phone]');
    nameInput.value = '416-111-2222';
    expect(nameInput.value).toEqual('416-111-2222');
  });

  it('should display input field for destination', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[name=destination]');
    nameInput.value = 'Canada';
    expect(nameInput.value).toEqual('Canada');
  });

  it('should display input field for date', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[name=date]');
    nameInput.value = '8/7/2018';
    expect(nameInput.value).toEqual('8/7/2018');
  });

  it('should display input field for comments', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('textarea[name=comments]');
    nameInput.value = 'Comments';
    expect(nameInput.value).toEqual('Comments');
  });

  it('should display submit button', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button[type=submit]');
    expect(button.textContent.trim()).toEqual('Submit');
  });
});
