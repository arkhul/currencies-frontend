import { TestBed } from '@angular/core/testing';

import { CurrencyUserQueryService } from './currency-user-query.service';

describe('CurrencyUserQueryService', () => {
  let service: CurrencyUserQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyUserQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
