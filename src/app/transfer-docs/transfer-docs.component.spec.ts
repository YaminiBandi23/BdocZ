import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDocsComponent } from './transfer-docs.component';

describe('TransferDocsComponent', () => {
  let component: TransferDocsComponent;
  let fixture: ComponentFixture<TransferDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
