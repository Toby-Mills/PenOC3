import { TestBed, inject } from '@angular/core/testing';

import { ApplicationConfigurationService } from './application-configuration.service';

describe('ApplicationConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationConfigurationService]
    });
  });

  it('should be created', inject([ApplicationConfigurationService], (service: ApplicationConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
