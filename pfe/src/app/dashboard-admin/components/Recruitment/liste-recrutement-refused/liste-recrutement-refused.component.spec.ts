import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecrutementRefusedComponent } from './liste-recrutement-refused.component';

describe('ListeRecrutementRefusedComponent', () => {
  let component: ListeRecrutementRefusedComponent;
  let fixture: ComponentFixture<ListeRecrutementRefusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecrutementRefusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecrutementRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
