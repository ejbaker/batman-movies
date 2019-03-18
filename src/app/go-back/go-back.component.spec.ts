/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * App components
 */
import { GoBackComponent } from './go-back.component';

/**
 * Describe
 */
describe('GoBackComponent', () => {

/**
 * Configure
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [ GoBackComponent ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const fixture: ComponentFixture<GoBackComponent> = TestBed.createComponent(GoBackComponent);
    const component: GoBackComponent = fixture.componentInstance;
    // return values
    return { fixture, component };
  }

  /**
   * Assertions
   */
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should render a button with value "Go Back"', () => {
    const { fixture } = setup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Go Back');
  });
});
