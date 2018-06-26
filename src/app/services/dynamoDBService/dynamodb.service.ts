import { Injectable } from '@angular/core';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import * as creds from '../../../secrets/credentials.json';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DynamoDBService {
  dynamoDB: DynamoDB;

  constructor(public http: HttpClient) {
    console.log('DynamoDBService: constructor');
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10',
      region: 'us-east-1',
      accessKeyId: creds['accessKeyId'],
      secretAccessKey: creds['secretAccessKey'],
      endpoint: 'http://localhost:8000'
    });
  }

  public test(): void {
    const params = {
      AttributeDefinitions: [
        {
          AttributeName: 'Artist',
          AttributeType: 'S'
        },
        {
          AttributeName: 'SongTitle',
          AttributeType: 'S'
        },
      ],
      KeySchema: [
        {
          AttributeName: 'Artist',
          KeyType: 'HASH'
        },
        {
          AttributeName: 'SongTitle',
          KeyType: 'RANGE'
        }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
      },
      TableName: 'Music'
    };

    this.dynamoDB.createTable(params, (err, data) => {
      if (err) { console.log(err, err.stack); } else { console.log(data); }
    });
  }

}
