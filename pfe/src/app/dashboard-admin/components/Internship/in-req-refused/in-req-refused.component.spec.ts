import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InReqRefusedComponent } from './in-req-refused.component';

describe('InReqRefusedComponent', () => {
  let component: InReqRefusedComponent;
  let fixture: ComponentFixture<InReqRefusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InReqRefusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InReqRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
