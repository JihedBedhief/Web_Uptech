import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnershipComponent } from './login-enership.component';

describe('LoginEnershipComponent', () => {
  let component: LoginEnershipComponent;
  let fixture: ComponentFixture<LoginEnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
