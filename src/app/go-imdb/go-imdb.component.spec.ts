/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * App components
 */
import { GoImdbComponent } from './go-imdb.component';

/**
 * Describe
 */
describe('GoImdbComponent', () => {
  
  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoImdbComponent,
      ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const fixture: ComponentFixture<GoImdbComponent> = TestBed.createComponent(GoImdbComponent);
    const component: GoImdbComponent = fixture.componentInstance;
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

  it('should render a button with value "View on IMDB"', () => {
    const { fixture } = setup();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('View on IMDB');
  });
});
