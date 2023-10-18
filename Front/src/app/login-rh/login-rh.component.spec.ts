import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRHComponent } from './login-rh.component';

describe('LoginRHComponent', () => {
  let component: LoginRHComponent;
  let fixture: ComponentFixture<LoginRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
