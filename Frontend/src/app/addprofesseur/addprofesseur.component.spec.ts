import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofesseurComponent } from './addprofesseur.component';

describe('AddprofesseurComponent', () => {
  let component: AddprofesseurComponent;
  let fixture: ComponentFixture<AddprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
