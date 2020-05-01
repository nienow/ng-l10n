import { TestBed } from '@angular/core/testing';

import { NgL10nLibService } from './ng-l10n-lib.service';

describe('NgL10nLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgL10nLibService = TestBed.get(NgL10nLibService);
    expect(service).toBeTruthy();
  });
});
