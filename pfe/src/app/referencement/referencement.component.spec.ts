import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencementComponent } from './referencement.component';

describe('ReferencementComponent', () => {
  let component: ReferencementComponent;
  let fixture: ComponentFixture<ReferencementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
