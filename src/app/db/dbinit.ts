import { DynamoDBService } from '../services/dynamoDBService/dynamodb.service';
import DynamoDB = require('aws-sdk/clients/dynamodb');

export class DBInit {
  dynamoDB: DynamoDB;

  constructor(public dynamoService: DynamoDBService) {
    console.log('DBInit constructor');
    this.dynamoDB = dynamoService.getDynamodDBConnection();
    this.initializeDB();
  }

  public initializeDB() {

  }
}
