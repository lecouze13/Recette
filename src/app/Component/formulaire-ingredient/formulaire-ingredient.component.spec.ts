import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireIngredientComponent } from './formulaire-ingredient.component';

describe('FormulaireIngredientComponent', () => {
  let component: FormulaireIngredientComponent;
  let fixture: ComponentFixture<FormulaireIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
