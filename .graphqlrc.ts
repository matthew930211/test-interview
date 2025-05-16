import type { IGraphQLConfig } from 'graphql-config';

const config: IGraphQLConfig = {
  schema: './schema.graphql',
  documents: 'app/**/*.{ts,tsx}',
};

export default config;
