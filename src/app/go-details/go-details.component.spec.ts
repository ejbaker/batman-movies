/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * App components
 */
import { GoDetailsComponent } from './go-details.component';

/**
 * Describe
 */
describe('GoDetailsComponent', () => {

  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [ GoDetailsComponent ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const fixture: ComponentFixture<GoDetailsComponent> = TestBed.createComponent(GoDetailsComponent);
    const component: GoDetailsComponent = fixture.componentInstance;
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

  it('should render a button with value "View Details"', () => {
    const { fixture } = setup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('View Details');
  });
});
