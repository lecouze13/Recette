import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCollaborateurComponent } from './login-collaborateur.component';

describe('LoginCollaborateurComponent', () => {
  let component: LoginCollaborateurComponent;
  let fixture: ComponentFixture<LoginCollaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCollaborateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
