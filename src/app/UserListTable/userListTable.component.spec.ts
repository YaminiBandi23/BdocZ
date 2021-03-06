import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTableComponent } from './UserListTable.component';

describe('UserListTableComponent', () => {
  let component: UserListTableComponent;
  let fixture: ComponentFixture<UserListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
