import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header details', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toEqual(component.companyName);
    expect(compiled.querySelector('div.title>span').textContent).toEqual('Co-Founder');
    const result = fixture.debugElement.queryAll(By.css('div.title>h5'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toEqual(component.founders[i].name);
    });
  });

  it('should display address of the location', () => {
    const result = fixture.debugElement.queryAll(By.css('.address'));
    result.forEach((x, i) => {
      // expect(x.nativeElement.textContent).toContain(component.address[i]);
    });
  });

  it('should display all the phone numbers', () => {
    const result = fixture.debugElement.queryAll(By.css('.phone'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toContain(component.founders[i].phone);
    });
  });

  it('should display email address', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.email').href).toContain(component.email);
  });

  it('should display google maps in iframe', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.google-maps>iframe').src).toEqual(component.gMapId);
  });

});
