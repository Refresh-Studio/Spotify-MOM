import { type ClientConfig, createClient } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'z82w99p1',
  dataset: 'production',
  apiVersion: '2023-07-16',
  useCdn: false
};

const client = createClient(config);

export default client;
