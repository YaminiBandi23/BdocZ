import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransactionsLatestComponent } from './my-transactions-latest.component';

describe('MyTransactionsLatestComponent', () => {
  let component: MyTransactionsLatestComponent;
  let fixture: ComponentFixture<MyTransactionsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransactionsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransactionsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
