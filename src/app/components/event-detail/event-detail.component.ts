import { Component, OnInit } from '@angular/core';
import { DynamoDBService } from "../../services/dynamoDBService/dynamodb.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  model = {
    artist: "",
    day: "",
    year: "",
    description: "",
    eventID: null
  };
  private sub: any;

  constructor(private dynamoDBService: DynamoDBService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['eventID']);
    });
  }

  onSubmit() {
    // this.dynamoDBService.putItem(this.model);
  }

}
