import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserManagePageComponent } from './admin-user-manage-page.component';

describe('AdminUserManagePageComponent', () => {
  let component: AdminUserManagePageComponent;
  let fixture: ComponentFixture<AdminUserManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
