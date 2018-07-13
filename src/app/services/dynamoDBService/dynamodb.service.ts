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
  private mapper: DataMapper;

  constructor(public http: HttpClient) {
    console.log('DynamoDBService: constructor');
    this.dynamoDB = new DynamoDB({
      apiVersion: '2012-08-10',
      region: 'us-east-1',
      accessKeyId: creds['accessKeyId'],
      secretAccessKey: creds['secretAccessKey'],
      endpoint: environment.dynamo_url
    });
    this.mapper = new DataMapper({
      client: this.dynamoDB
    });

  }

  getDynamodDBConnection() {
    return this.dynamoDB;
  }

  async queryByArtist(artist: string): Promise<QueryResult[]> {
    let results: QueryResult[] = [];

    for await (const item of this.mapper.query(QueryResult, {artist: artist}, { indexName: 'artist-index'} )) {
      results.push(item)
    }

    return results;
  }

  async queryByEventID(eventID: string): Promise<QueryResult[]> {
    let results: QueryResult[] = [];

    for await (const item of this.mapper.query(QueryResult, {eventID: eventID})) {
      console.log(item);
      results.push(item)
    }

    return results;
  }

  async queryByDayAndYear(day: string, year: number): Promise<QueryResult[]> {
    let results: QueryResult[] = [];

    for await (const item of this.mapper.query(QueryResult, {day: day, year: year}, { indexName: 'day-year-index'} )) {
      results.push(item)
    }

    return results;
  }

  async queryByDay(day: string): Promise<QueryResult[]> {
    console.log("queryByDay Called");
    let results: QueryResult[] = [];

    for await (const item of this.mapper.query(QueryResult, {day: day}, { indexName: 'day-year-index'} )) {
      results.push(item)
    }

    console.log(results);
    return results;
  }

  putItem(item: object) {
    const toSave =  Object.assign(new QueryResult, item);
    this.mapper.put(toSave).then(objectSaved => {
      console.log("item saved: " + objectSaved);
    })
  }

}
