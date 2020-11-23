import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdynamicComponent } from './testdynamic.component';

describe('TestdynamicComponent', () => {
  let component: TestdynamicComponent;
  let fixture: ComponentFixture<TestdynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
