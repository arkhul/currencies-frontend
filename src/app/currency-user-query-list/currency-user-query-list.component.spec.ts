import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyUserQueryListComponent } from './currency-user-query-list.component';

describe('CurrencyUserQueryListComponent', () => {
  let component: CurrencyUserQueryListComponent;
  let fixture: ComponentFixture<CurrencyUserQueryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyUserQueryListComponent]
    });
    fixture = TestBed.createComponent(CurrencyUserQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
