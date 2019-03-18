/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * App components
 */
import { SidebarComponent } from './sidebar.component';

/**
 * Describe
 */
describe('SidebarComponent', () => {

  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const fixture: ComponentFixture<SidebarComponent> = TestBed.createComponent(SidebarComponent);
    const component: SidebarComponent = fixture.componentInstance;
    // set @Input
    component.decades = [
      1990,
      2000,
    ];
    // return values
    return { fixture, component };
  }

  /**
   * Assertions
   */
  it('should create', () => {
    // set up
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should render an unordered list', () => {
    // set up
    const { fixture } = setup();
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    expect(compile.querySelector('ul')).toBeTruthy();
  });
});
