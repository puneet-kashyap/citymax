import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { By } from '../../../node_modules/@angular/platform-browser';
import { FooterComponent } from './footer.component';



describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all the links', () => {
    let result = fixture.debugElement.queryAll(By.css('div.links>a'));
    result.forEach((x, i) => {
      expect(x.nativeElement.textContent).toEqual(component.links[i].name);
      expect(x.nativeElement.getAttribute('ng-reflect-router-link')).toEqual(component.links[i].hyperlink);
    });
  });

  it('should display email link in the footer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.copyright').textContent).toContain(component.app);
    expect(compiled.querySelector('div.copyright').textContent).toContain(component.getYear());
    expect(compiled.querySelector('#footer-email').textContent).toContain(component.app);
    expect(compiled.querySelector('#footer-email').href).toContain(component.email);
  })
});
