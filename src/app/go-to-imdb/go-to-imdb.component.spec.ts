import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToImdbComponent } from './go-to-imdb.component';

describe('GoToImdbComponent', () => {
  let component: GoToImdbComponent;
  let fixture: ComponentFixture<GoToImdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToImdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToImdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
