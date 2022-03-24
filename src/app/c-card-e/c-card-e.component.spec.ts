import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCardEComponent } from './c-card-e.component';

describe('CCardEComponent', () => {
  let component: CCardEComponent;
  let fixture: ComponentFixture<CCardEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCardEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCardEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
