/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';

/**
 * App components
 */
import { MoviesComponent } from './movies.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GoDetailsComponent } from '../go-details/go-details.component';

/**
 * App services
 */
import { DataService } from '../data.service';

/**
 * Describe
 */
describe('MoviesComponent', () => {

  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        MoviesComponent,
        SidebarComponent,
        GoDetailsComponent,
      ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const fixture: ComponentFixture<MoviesComponent> = TestBed.createComponent(MoviesComponent);
    const component: MoviesComponent = fixture.componentInstance;
    const dataService: DataService = fixture.debugElement.injector.get(DataService);
    // return values
    return { fixture, component, dataService };
  }

  /**
   * Assertions
   */
  it('should create', () => {
    // set up
    const { component } = setup();
    // expect
    expect(component).toBeTruthy();
  });

  it('should render an unordered list with class .movies', () => {
    // set up
    const { fixture, dataService } = setup();
    // mock a movie array for testing
    const mockMovies: Array<any> = [
      {
        Title: 'Fake Batman Movie',
        Year: 2009,
      },
      {
        Title: 'Fake Batman Remake Movie',
        Year: 2019,
      }
    ];
    // mock some data
    const mockData = {
      Search: mockMovies,
      Decades: [
        1990,
        2000,
      ],
    };
    // spy on the data service with mock movie
    spyOn(dataService, 'getMovies').and.returnValue(
      Observable.create((observer: Observer<{
        Search: object,
        Decades: Array<any>,
      }>) => {
        observer.next(mockData);
        return observer;
    }));
    // detect changes
    fixture.detectChanges();
    // compile the component
    const compile = fixture.debugElement.nativeElement;
    // expect
    expect(compile.querySelector('.movies')).toBeTruthy();
    // get selectedMovie
    const selectedMovie = compile.querySelectorAll('.title')[0];
    // expect
    expect(selectedMovie.textContent).toBe('Fake Batman Movie');
  });
});
