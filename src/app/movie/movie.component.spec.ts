/**
 * Angular modules
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';

/**
 * App component
 */
import { MovieComponent } from './movie.component';
import { GoBackComponent } from '../go-back/go-back.component';
import { GoImdbComponent } from '../go-imdb/go-imdb.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

/**
 * App services
 */
import { DataService } from '../data.service';

/**
 * Describe
 */
describe('MovieComponent', () => {
  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        SidebarComponent,
        MovieComponent,
        GoBackComponent,
        GoImdbComponent,
      ]
    })
    .compileComponents();
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    const fixture = TestBed.createComponent(MovieComponent);
    const component = fixture.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
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

  it('should render an unordered list with class .movie', () => {
    // set up
    const { fixture, dataService } = setup();
    // mock a movie for testing
    const mockMovie = {
      Title: 'Fake Batman Movie',
      Year: 2019
    };
    // spy on the data service with mock movie
    spyOn(dataService, 'getMovie').and.returnValue(
      Observable.create((observer: Observer<{ Title: string, Year: number }>) => {
        observer.next(mockMovie);
        return observer;
    }));
    // detect changes
    fixture.detectChanges();
    // compile the component
    const compile = fixture.debugElement.nativeElement;
    // expect
    expect(compile.querySelector('.movie')).toBeTruthy();
    // get selectedMovie
    const selectedMovie = compile.querySelector('.title');
    // expect
    expect(selectedMovie.textContent).toBe('Fake Batman Movie (2019)');
  });
});
