import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUsersRefusedComponent } from './liste-users-refused.component';

describe('ListeUsersRefusedComponent', () => {
  let component: ListeUsersRefusedComponent;
  let fixture: ComponentFixture<ListeUsersRefusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUsersRefusedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUsersRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
