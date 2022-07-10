import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentServicesComponent } from './development-services.component';

describe('DevelopmentServicesComponent', () => {
  let component: DevelopmentServicesComponent;
  let fixture: ComponentFixture<DevelopmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
