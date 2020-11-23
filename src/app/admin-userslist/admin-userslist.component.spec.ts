import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserslistComponent } from './admin-userslist.component';

describe('AdminUserslistComponent', () => {
  let component: AdminUserslistComponent;
  let fixture: ComponentFixture<AdminUserslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
