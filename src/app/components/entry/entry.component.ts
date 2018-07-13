import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from "../../services/dynamoDBService/dynamodb.service";
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
    eventID: null,
    description: ""
  };

  constructor(private dynamoDBService: DynamoDBService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.dynamoDBService.putItem(this.transformData());
  }

  transformData() {
    return {
      artist: this.model.artist,
      day: this.model.day,
      year: this.model.year,
      eventID: uuidv1(),
      data: {
        description: this.model.description;
      }
    }
  }

}
