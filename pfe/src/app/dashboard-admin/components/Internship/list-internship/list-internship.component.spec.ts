import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInternshipComponent } from './list-internship.component';

describe('ListInternshipComponent', () => {
  let component: ListInternshipComponent;
  let fixture: ComponentFixture<ListInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
