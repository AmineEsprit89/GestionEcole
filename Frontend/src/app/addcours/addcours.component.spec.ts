import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoursComponent } from './addcours.component';

describe('AddcoursComponent', () => {
  let component: AddcoursComponent;
  let fixture: ComponentFixture<AddcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
