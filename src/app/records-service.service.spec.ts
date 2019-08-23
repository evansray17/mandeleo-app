import { TestBed } from '@angular/core/testing';

import { RecordsServiceService } from './records-service.service';

describe('RecordsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordsServiceService = TestBed.get(RecordsServiceService);
    expect(service).toBeTruthy();
  });
});
