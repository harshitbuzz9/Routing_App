import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAppComponent } from './bank-app.component';

describe('BankAppComponent', () => {
  let component: BankAppComponent;
  let fixture: ComponentFixture<BankAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
