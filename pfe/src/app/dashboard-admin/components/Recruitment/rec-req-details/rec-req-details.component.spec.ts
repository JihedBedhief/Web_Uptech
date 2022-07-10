import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecReqDetailsComponent } from './rec-req-details.component';

describe('RecReqDetailsComponent', () => {
  let component: RecReqDetailsComponent;
  let fixture: ComponentFixture<RecReqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecReqDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecReqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
