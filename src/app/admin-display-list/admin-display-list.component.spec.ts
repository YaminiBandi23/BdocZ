import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayListComponent } from './admin-display-list.component';

describe('AdminDisplayListComponent', () => {
  let component: AdminDisplayListComponent;
  let fixture: ComponentFixture<AdminDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
