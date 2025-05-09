import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { algoliasearch, SearchClient } from 'algoliasearch';
type algoliaObject = {
  id: string
  title: String;
  description: String;
  budget: Number;
};
@Injectable()
export class AlgoliaService {
  private client: SearchClient;

  constructor(private config: ConfigService) {
    const apiKey = this.config.get<string>('ALGOLIA_API_KEY');
    const apiSecret = this.config.get<string>('ALGOLIA_API_SECRET');

    if (!apiKey || !apiSecret) {
      throw new Error('Algolia config missing!');
    }
    this.client = algoliasearch(apiKey, apiSecret);
  }
  async saveObject(object: algoliaObject) {
    let indexName = 'jobs_index';
    const { taskID } = await this.client.saveObject({
      indexName,
      body: object,
    });
    await this.client.waitForTask({
      indexName,
      taskID,
    });
  }
  editObject() {}
}
