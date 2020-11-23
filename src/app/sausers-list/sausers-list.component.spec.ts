import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAUsersListComponent } from './sausers-list.component';

describe('SAUsersListComponent', () => {
  let component: SAUsersListComponent;
  let fixture: ComponentFixture<SAUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
