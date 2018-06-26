import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { DynamoDBService } from './services/dynamoDBService/dynamodb.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './router/Routes';
import { HomeComponent } from './home/home.component';
import { AwsutilService } from "./services/awsutil/awsutil.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,{ enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [
    DynamoDBService,
    AwsutilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
