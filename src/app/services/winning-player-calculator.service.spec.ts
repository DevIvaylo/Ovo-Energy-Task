import { TestBed, inject } from '@angular/core/testing';

import { WinningPlayerCalculatorService } from './winning-player-calculator.service';

describe('WinningPlayerCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinningPlayerCalculatorService]
    });
  });

  it('should be created', inject([WinningPlayerCalculatorService], (service: WinningPlayerCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
