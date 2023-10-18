import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRecetteComponent } from './formulaire-recette.component';

describe('FormulaireRecetteComponent', () => {
  let component: FormulaireRecetteComponent;
  let fixture: ComponentFixture<FormulaireRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
