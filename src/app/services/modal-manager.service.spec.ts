import { TestBed, inject } from '@angular/core/testing';

import { ModalManagerService } from './modal-manager.service';

describe('ModalManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalManagerService]
    });
  });

  it('should be created', inject([ModalManagerService], (service: ModalManagerService) => {
    expect(service).toBeTruthy();
  }));
});
