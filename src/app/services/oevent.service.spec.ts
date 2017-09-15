import { TestBed, inject } from '@angular/core/testing';

import { OeventService } from './oevent.service';

describe('OeventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OeventService]
    });
  });

  it('should be created', inject([OeventService], (service: OeventService) => {
    expect(service).toBeTruthy();
  }));
});
