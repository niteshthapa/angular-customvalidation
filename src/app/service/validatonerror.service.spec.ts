import { TestBed } from '@angular/core/testing';

import { ValidatonerrorService } from './validatonerror.service';

describe('ValidatonerrorService', () => {
  let service: ValidatonerrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatonerrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
