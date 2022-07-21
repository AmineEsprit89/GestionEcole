import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyclubComponent } from './modifyclub.component';

describe('ModifyclubComponent', () => {
  let component: ModifyclubComponent;
  let fixture: ComponentFixture<ModifyclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
