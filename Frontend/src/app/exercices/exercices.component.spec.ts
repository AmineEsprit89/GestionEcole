import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesComponent } from './exercices.component';

describe('ExercicesComponent', () => {
  let component: ExercicesComponent;
  let fixture: ComponentFixture<ExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
