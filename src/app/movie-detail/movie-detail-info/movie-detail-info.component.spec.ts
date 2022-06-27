import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailInfoComponent } from './movie-detail-info.component';

describe('MovieDetailInfoComponent', () => {
  let component: MovieDetailInfoComponent;
  let fixture: ComponentFixture<MovieDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
