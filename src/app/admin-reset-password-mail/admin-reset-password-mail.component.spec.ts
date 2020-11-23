import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetPasswordMailComponent } from './admin-reset-password-mail.component';

describe('AdminResetPasswordMailComponent', () => {
  let component: AdminResetPasswordMailComponent;
  let fixture: ComponentFixture<AdminResetPasswordMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResetPasswordMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetPasswordMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
