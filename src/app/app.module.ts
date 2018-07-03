import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryComponent } from './components/query/query.component';
import { DynamoDBService } from './services/dynamoDBService/dynamodb.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './router/Routes';
import { AwsutilService } from "./services/awsutil/awsutil.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { EntryComponent } from './components/entry/entry.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    EntryComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,{ enableTracing: true }
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DynamoDBService,
    AwsutilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
