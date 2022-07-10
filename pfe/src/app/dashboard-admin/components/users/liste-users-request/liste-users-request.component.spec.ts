import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUsersRequestComponent } from './liste-users-request.component';

describe('ListeUsersRequestComponent', () => {
  let component: ListeUsersRequestComponent;
  let fixture: ComponentFixture<ListeUsersRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUsersRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUsersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
