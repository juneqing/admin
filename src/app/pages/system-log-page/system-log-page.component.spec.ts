import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLogPageComponent } from './system-log-page.component';

describe('SystemLogPageComponent', () => {
  let component: SystemLogPageComponent;
  let fixture: ComponentFixture<SystemLogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
