import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddabsComponent } from './addabs.component';

describe('AddabsComponent', () => {
  let component: AddabsComponent;
  let fixture: ComponentFixture<AddabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
