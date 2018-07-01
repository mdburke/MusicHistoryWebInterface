import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from '../../services/dynamoDBService/dynamodb.service';
import { ItemList, QueryOutput } from "aws-sdk/clients/dynamodb";
import { Subscription } from "rxjs/Subscription";
import { QueryResult } from "../../domain/QueryResult";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  private results: QueryResult[] = [];
  private queryValue: number;
  private subscription: Subscription;

  constructor(private dynamoDBService: DynamoDBService) {
    // this.subscription = this.dynamoDBService.
  }

  async ngOnInit() {
    const output = await this.dynamoDBService.queryByDay(  '0526');
    console.log(output);
    // this.loadQueryResultFromData(output.Items);
    // console.log(this.results);
  }

  loadQueryResultFromData(output: ItemList) {
    output.forEach(item => {
      // this.results.push(new QueryResult(
      //   item['eventID']['S'],
      //   item['day']['S'],
      //   item['year']['S'],
      //   item['data']['M'],
      //   item['artist']['S']
      // ));
    });
  }

}
