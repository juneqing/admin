import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktagManagePageComponent } from './tasktag-manage-page.component';

describe('TasktagManagePageComponent', () => {
  let component: TasktagManagePageComponent;
  let fixture: ComponentFixture<TasktagManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasktagManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktagManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
