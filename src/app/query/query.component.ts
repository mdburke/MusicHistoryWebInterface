import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from "../services/dynamoDBService/dynamodb.service";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(public dynamoDB: DynamoDBService) {
  }

  ngOnInit() {
    this.dynamoDB.test();
  }

}
