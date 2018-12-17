import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display company name on the top', () => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('div.first-row>h2>a');
    expect(header.textContent).toEqual('CitiMax Enterprises');
    expect(header.getAttribute('ng-reflect-router-link')).toEqual('/');
  });

  it('should display image on header', () => {
    const compiled = fixture.debugElement.nativeElement;
    const rightImage = compiled.querySelector('div.right-section>img.rightLogo');
    expect(rightImage.src).toContain(component.rightLogo);
    expect(rightImage.alt).toContain('CitiMax');
  });

  it('should display all the links on the header', () => {
    const compiled = fixture.debugElement.nativeElement;
    const result = fixture.debugElement.queryAll(By.css('div.second-row>a'));
    result.forEach(((x, i) => {
      expect(x.nativeElement.getAttribute('ng-reflect-router-link')).toEqual(component.routes[i].routeLink);
      expect(x.nativeElement.textContent.trim()).toEqual(component.routes[i].routeName);
    }));
  });
});
