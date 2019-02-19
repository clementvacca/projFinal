import { TestBed } from '@angular/core/testing';

import { StagiairesService } from './stagiaires.service';

describe('StagiairesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagiairesService = TestBed.get(StagiairesService);
    expect(service).toBeTruthy();
  });
});
