import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRHComponent } from './container-rh.component';

describe('ContainerRHComponent', () => {
  let component: ContainerRHComponent;
  let fixture: ComponentFixture<ContainerRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
