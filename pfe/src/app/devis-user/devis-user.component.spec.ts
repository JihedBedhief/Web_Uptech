import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisUserComponent } from './devis-user.component';

describe('DevisUserComponent', () => {
  let component: DevisUserComponent;
  let fixture: ComponentFixture<DevisUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
