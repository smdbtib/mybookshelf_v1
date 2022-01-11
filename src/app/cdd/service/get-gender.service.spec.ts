import { TestBed } from '@angular/core/testing';

import { GetGenderService } from './get-gender.service';

describe('GetGenderService', () => {
  let service: GetGenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
