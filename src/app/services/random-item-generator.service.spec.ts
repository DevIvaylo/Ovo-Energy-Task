import { TestBed, inject } from '@angular/core/testing';

import { RandomItemGeneratorService } from './random-item-generator.service';

describe('RandomItemGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomItemGeneratorService]
    });
  });

  it('should be created', inject([RandomItemGeneratorService], (service: RandomItemGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
