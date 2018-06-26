import { TestBed, inject } from '@angular/core/testing';

import { DynamoDBService } from './dynamodb.service';

describe('DynamoDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamoDBService]
    });
  });

  it('should be created', inject([DynamoDBService], (service: DynamoDBService) => {
    expect(service).toBeTruthy();
  }));
});
