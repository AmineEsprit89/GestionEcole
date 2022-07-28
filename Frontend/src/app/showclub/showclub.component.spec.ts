import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowclubComponent } from './showclub.component';

describe('ShowclubComponent', () => {
  let component: ShowclubComponent;
  let fixture: ComponentFixture<ShowclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
