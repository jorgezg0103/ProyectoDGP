import { TestBed } from '@angular/core/testing';

import { PaginationSizeBasedService } from './pagination-size-based.service';

describe('PaginationSizeBasedService', () => {
  let service: PaginationSizeBasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationSizeBasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
