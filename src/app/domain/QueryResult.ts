import { attribute, hashKey, table} from '@aws/dynamodb-data-mapper-annotations';

@table('music_history_dev')
export class QueryResult {
  @hashKey()
  eventID: string;
  @attribute()
  day: string;
  @attribute()
  year: number;
  @attribute()
  artist: string;
  @attribute({memberType: {type: 'String'}})
  data: Map<any, any>;
}
