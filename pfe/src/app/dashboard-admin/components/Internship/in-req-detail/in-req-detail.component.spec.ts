import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InReqDetailComponent } from './in-req-detail.component';

describe('InReqDetailComponent', () => {
  let component: InReqDetailComponent;
  let fixture: ComponentFixture<InReqDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InReqDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InReqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
