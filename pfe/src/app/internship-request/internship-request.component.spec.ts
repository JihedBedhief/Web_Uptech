import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipRequestComponent } from './internship-request.component';

describe('InternshipRequestComponent', () => {
  let component: InternshipRequestComponent;
  let fixture: ComponentFixture<InternshipRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
