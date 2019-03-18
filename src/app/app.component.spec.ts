/**
 * Angular modules
 */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * App components
 */
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { GoBackComponent } from './go-back/go-back.component';
import { GoDetailsComponent } from './go-details/go-details.component';
import { GoImdbComponent } from './go-imdb/go-imdb.component';

/**
 * Describe
 */
describe('AppComponent', () => {
  /**
   * Configure
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        SidebarComponent,
        MovieComponent,
        MoviesComponent,
        GoBackComponent,
        GoDetailsComponent,
        GoImdbComponent,
      ],
    }).compileComponents();
  }));

  /**
   * Assertions
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dg-movies-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dg-movies-app');
  });

  it(`should have as pageTitle 'Movies'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual('Movies');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Movies');
  });
});
