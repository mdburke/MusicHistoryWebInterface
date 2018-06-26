import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsutilService {

  constructor() {}

  // public setRegion(region: string): void {
  //   AWS.config.region = region;
  // }

  // public setCreds(): void {
  //   var creds = new AWS.SharedIniFileCredentials();
  //   var config = new AWS.config({
  //     credentials: creds,
  //   });
  //   // AWS.config.loadFromPath('~/.aws/credentials');
  //   // AWS.config.credentials = new AWS.SharedIniFileCredentials();
  //   // const credentials = AWS.SharedIniFileCredentials;
  //   // var credentials = AWS.SharedIniFileCredentials({profile: 'work-account'});
  //   // let credentials = new AWS.Credentials(new SharedIniFileCredentials());
  //   // AWS.config.credentials = credentials;
  // }
}
