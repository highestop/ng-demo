import { TestBed } from '@angular/core/testing';

import { NgDemoLibService } from './ng-demo-lib.service';

describe('NgDemoLibService', () => {
  let service: NgDemoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDemoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
