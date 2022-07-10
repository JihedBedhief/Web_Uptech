import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecrutementRequestComponent } from './liste-recrutement-request.component';

describe('ListeRecrutementRequestComponent', () => {
  let component: ListeRecrutementRequestComponent;
  let fixture: ComponentFixture<ListeRecrutementRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecrutementRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecrutementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
