import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurrencyQueryComponent } from './new-currency-query.component';

describe('NewCurrencyQueryComponent', () => {
  let component: NewCurrencyQueryComponent;
  let fixture: ComponentFixture<NewCurrencyQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCurrencyQueryComponent]
    });
    fixture = TestBed.createComponent(NewCurrencyQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
