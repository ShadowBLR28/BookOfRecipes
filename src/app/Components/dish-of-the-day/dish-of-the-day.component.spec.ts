import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishOfTheDayComponent } from './dish-of-the-day.component';

describe('DishOfTheDayComponent', () => {
  let component: DishOfTheDayComponent;
  let fixture: ComponentFixture<DishOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
