import { TestBed, inject } from '@angular/core/testing';

import { UndustService } from './undust.service';

describe('UndustService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UndustService]
    });
  });

  it('should be created', inject([UndustService], (service: UndustService) => {
    expect(service).toBeTruthy();
  }));
});
