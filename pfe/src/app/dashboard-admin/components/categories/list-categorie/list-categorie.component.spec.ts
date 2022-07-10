import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategorieComponent } from './list-categorie.component';

describe('ListCategorieComponent', () => {
  let component: ListCategorieComponent;
  let fixture: ComponentFixture<ListCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
