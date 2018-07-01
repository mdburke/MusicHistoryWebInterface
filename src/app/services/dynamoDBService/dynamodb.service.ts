import { Injectable } from '@angular/core';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import * as creds from '../../../secrets/credentials.json';
import { HttpClient } from '@angular/common/http';
import { QueryOutput } from "aws-sdk/clients/dynamodb";
import { environment } from "../../../environments/environment";
import { DataMapper } from "@aws/dynamodb-data-mapper";
import { QueryResult } from "../../domain/QueryResult";

@Injectable()
export class DynamoDBService {
  private dynamoDB: DynamoDB;

  constructor(public http: HttpClient) {
    console.log('DynamoDBService: constructor');
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10',
      region: 'us-east-1',
      accessKeyId: creds['accessKeyId'],
      secretAccessKey: creds['secretAccessKey'],
      endpoint: environment.dynamo_url
    });
  }

  getDynamodDBConnection() {
    return this.dynamoDB;
  }

  async queryByArtist(artist: string): Promise<QueryOutput> {
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

  async queryByEventID(eventID: string): Promise<QueryOutput> {
    const params = {
      ExpressionAttributeValues: {
        ':partitionkeyval': { 'S': `${eventID}` }
      },
      KeyConditionExpression: 'eventID = :partitionkeyval',
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

  async queryByDayAndYear(day: string, year: number): Promise<QueryOutput> {
    const params = {
      ExpressionAttributeValues: {
        ':partitionkeyval': { 'S': `${day}` },
        ':sortkeyval': { 'N': `${year}` }
      },
      ExpressionAttributeNames: {
        '#day':'day',
        '#year': 'year'
      },
      IndexName: 'day-year-index',
      KeyConditionExpression: '#day = :partitionkeyval AND #year = :sortkeyval',
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

  async queryByDay(day: string): Promise<QueryResult[]> {
    const mapper = new DataMapper({
      client: this.dynamoDB
    });

    let results: QueryResult[] = [];

    for await (const item of mapper.query(QueryResult, {day: day}, { indexName: 'day-year-index'} )) {
      results.push(item)
    }

    return results;
  }

}
