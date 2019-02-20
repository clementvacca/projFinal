import { TestBed } from '@angular/core/testing';

import { StagiairesFormationService } from './stagiaires-formation.service';

describe('StagiairesFormationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagiairesFormationService = TestBed.get(StagiairesFormationService);
    expect(service).toBeTruthy();
  });
});
