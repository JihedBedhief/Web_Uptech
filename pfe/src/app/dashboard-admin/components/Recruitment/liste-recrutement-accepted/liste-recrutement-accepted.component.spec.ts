import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecrutementAcceptedComponent } from './liste-recrutement-accepted.component';

describe('ListeRecrutementAcceptedComponent', () => {
  let component: ListeRecrutementAcceptedComponent;
  let fixture: ComponentFixture<ListeRecrutementAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecrutementAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecrutementAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
