import { TestBed } from '@angular/core/testing';

import { ModulenseignementService } from './modulenseignement.service';

describe('ModulenseignementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModulenseignementService = TestBed.get(ModulenseignementService);
    expect(service).toBeTruthy();
  });
});
