import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InReqAcceptedComponent } from './in-req-accepted.component';

describe('InReqAcceptedComponent', () => {
  let component: InReqAcceptedComponent;
  let fixture: ComponentFixture<InReqAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InReqAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InReqAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
