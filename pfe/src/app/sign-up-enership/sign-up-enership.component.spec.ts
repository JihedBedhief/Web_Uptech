import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpEnershipComponent } from './sign-up-enership.component';

describe('SignUpEnershipComponent', () => {
  let component: SignUpEnershipComponent;
  let fixture: ComponentFixture<SignUpEnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpEnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpEnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
