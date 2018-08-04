import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutusComponent } from './aboutus.component';


describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.heading>h1').textContent).toEqual(component.title);
  });

  it('should display header description in paragraph', () => {
    let result = fixture.debugElement.queryAll(By.css('.content'));
    expect(result[0].nativeElement.textContent).toContain(component.header);
  });

  it('should display image for about us', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.image>img').src).toEqual(component.img.src);
    expect(compiled.querySelector('div.image>img').alt).toEqual(component.img.alt);
  });

  it('should display descriptions of about us in paragraph', () => {
    let result = fixture.debugElement.queryAll(By.css('.description'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toContain(component.description[i]);
    })
  });

  it('should display list of memberships', () => {
    let result = fixture.debugElement.queryAll(By.css('.memberships'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toContain(component.members[i]);
    })
  });

});