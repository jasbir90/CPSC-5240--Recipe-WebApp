import { TestBed, inject } from '@angular/core/testing';

import { TasteoflifeService } from './tasteoflife.service';

describe('TasteoflifeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasteoflifeService]
    });
  });

  it('should be created', inject([TasteoflifeService], (service: TasteoflifeService) => {
    expect(service).toBeTruthy();
  }));
});
