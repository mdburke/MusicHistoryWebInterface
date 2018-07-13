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
      this.dynamoDBService.queryByEventID(params['eventID'])
        .then(data => {
          this.model.artist = data[0].artist;
          this.model.day = data[0].day;
          this.model.year = data[0].year.toString();
          this.model.eventID = data[0].eventID;
          this.model.description = data[0].data.get('description');
        }).catch(error => {
          console.log(error);
        })
    });
  }

  onSubmit() {
    this.dynamoDBService.putItem(this.transformData());
  }

  transformData() {
    return {
      artist: this.model.artist,
      day: this.model.day,
      year: this.model.year,
      eventID: this.model.eventID,
      data: {
        description: this.model.description;
  }
  }
  }

}
