import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from '../../services/dynamoDBService/dynamodb.service';
import { ItemList, QueryOutput } from "aws-sdk/clients/dynamodb";
import { Subscription } from "rxjs/Subscription";
import { QueryResult } from "../../domain/QueryResult";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  results: QueryResult[] = [];
  queryValue: string;
  map: Map<string, string> = new Map();

  constructor(private dynamoDBService: DynamoDBService) {
  }

  ngOnInit() {
    this.map['artist'] = null;
    this.map['day'] = null;
    this.map['year'] = null;
    this.map['eventID'] = null;
  }

  async onSubmit() {
    console.log("onsubmit called");
    console.log(this.queryValue);
    console.log(this.map);
    console.log(this.queryValue == 2);
    switch(this.queryValue) {
      case "0": {
        this.results = await this.dynamoDBService.queryByArtist(this.map['artist']);
        break;
      }
      case "1": {
        this.results = await this.dynamoDBService.queryByEventID(this.map['eventID']);
        break;
      }
      case "2": {
        console.log("case 2");
        this.results = await this.dynamoDBService.queryByDay(this.map['day']);
        break;
      }
      case "3": {
        this.results = await this.dynamoDBService.queryByDayAndYear(this.map['day'], +this.map['year']);
        break;
      }
      default: {
        console.log(this.queryValue);
      }
    }

  }

}
