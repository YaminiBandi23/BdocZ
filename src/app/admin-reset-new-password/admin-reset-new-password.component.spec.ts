import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetNewPasswordComponent } from './admin-reset-new-password.component';

describe('AdminResetNewPasswordComponent', () => {
  let component: AdminResetNewPasswordComponent;
  let fixture: ComponentFixture<AdminResetNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResetNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
