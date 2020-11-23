import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeadderComponent } from './user-headder.component';

describe('UserHeadderComponent', () => {
  let component: UserHeadderComponent;
  let fixture: ComponentFixture<UserHeadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
