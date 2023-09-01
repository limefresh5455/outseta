import { TestBed } from '@angular/core/testing';

import { OutsetaService } from './outseta.service';

describe('OutsetaService', () => {
  let service: OutsetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutsetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
