import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPageComponent } from './poster-page.component';

describe('PosterPageComponent', () => {
  let component: PosterPageComponent;
  let fixture: ComponentFixture<PosterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
