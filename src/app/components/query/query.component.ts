import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from '../../services/dynamoDBService/dynamodb.service';
import { QueryOutput } from "aws-sdk/clients/dynamodb";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  private output: QueryOutput;

  constructor(public dynamoDB: DynamoDBService) {
  }

  async ngOnInit() {
    this.output = await this.dynamoDB.queryByDay(  '0526');
    console.log(this.output);
  }

}
