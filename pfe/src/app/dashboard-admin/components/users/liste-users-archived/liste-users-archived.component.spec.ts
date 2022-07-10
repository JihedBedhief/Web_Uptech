import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUsersArchivedComponent } from './liste-users-archived.component';

describe('ListeUsersArchivedComponent', () => {
  let component: ListeUsersArchivedComponent;
  let fixture: ComponentFixture<ListeUsersArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUsersArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUsersArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
