import { Component, OnInit } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { DynamoDBService } from "../../services/dynamoDBService/dynamodb.service";
import { QueryResult } from "../../domain/QueryResult";
const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  model = {
    artist: "",
    day: "",
    year: "",
    description: "",
    eventID: null
  };

  constructor(private dynamoDBService: DynamoDBService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.model.eventID = uuidv1();
    console.log(this.model.eventID);
    this.dynamoDBService.putItem(this.model);
  }

}
