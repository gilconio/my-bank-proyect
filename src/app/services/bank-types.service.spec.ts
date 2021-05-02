import { TestBed } from '@angular/core/testing';

import { BankTypesService } from './bank-types.service';

describe('BankTypesService', () => {
  let service: BankTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
