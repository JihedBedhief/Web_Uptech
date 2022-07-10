import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMarketingComponent } from './mobile-marketing.component';

describe('MobileMarketingComponent', () => {
  let component: MobileMarketingComponent;
  let fixture: ComponentFixture<MobileMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
