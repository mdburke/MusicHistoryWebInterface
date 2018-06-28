import { Injectable } from '@angular/core';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import * as creds from '../../../secrets/credentials.json';
import { HttpClient } from '@angular/common/http';
import { ResultSet } from 'aws-sdk/clients/athena';

@Injectable()
export class DynamoDBService {
  private dynamoDB: DynamoDB;

  constructor(public http: HttpClient) {
    console.log('DynamoDBService: constructor');
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10',
      region: 'us-east-1',
      accessKeyId: creds['accessKeyId'],
      secretAccessKey: creds['secretAccessKey']
    });
  }

  getDynamodDBConnection() {
    return this.dynamoDB;
  }

  queryByArtist(artist: string): Promise {
    const params = {
      ExpressionAttributeValues: {
        ':partitionkeyval': { 'S': `${artist}` }
      },
      IndexName: 'artist-index',
      KeyConditionExpression: 'artist = :partitionkeyval',
      TableName: 'music_history_dev'
    };

    return new Promise((resolve, reject) => {
      this.dynamoDB.query(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

}
