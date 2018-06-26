import { TestBed, inject } from '@angular/core/testing';

import { AwsutilService } from './awsutil.service';

describe('AwsutilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsutilService]
    });
  });

  it('should be created', inject([AwsutilService], (service: AwsutilService) => {
    expect(service).toBeTruthy();
  }));
});
