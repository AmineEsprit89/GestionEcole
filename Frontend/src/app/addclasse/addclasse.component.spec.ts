import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclasseComponent } from './addclasse.component';

describe('AddclasseComponent', () => {
  let component: AddclasseComponent;
  let fixture: ComponentFixture<AddclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
