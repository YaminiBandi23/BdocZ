import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDisplayListComponent } from './super-admin-display-list.component';

describe('SuperAdminDisplayListComponent', () => {
  let component: SuperAdminDisplayListComponent;
  let fixture: ComponentFixture<SuperAdminDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
