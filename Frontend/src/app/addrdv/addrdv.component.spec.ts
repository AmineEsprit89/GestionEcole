import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrdvComponent } from './addrdv.component';

describe('AddrdvComponent', () => {
  let component: AddrdvComponent;
  let fixture: ComponentFixture<AddrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
