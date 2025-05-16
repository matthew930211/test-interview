import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { possibleTypes } from "~/__generated__/possibleTypes.json";
import type { TypedTypePolicies } from "~/__generated__/apollo-helpers";

let _client: ApolloClient<unknown> | undefined;

const httpLink = new HttpLink({
  uri: "https://api.headlesstrade.com/gubi/storefront/graphql",
  headers: {
    "GraphQL-Preflight": "1",
  }
});

export function getApolloClient(): ApolloClient<unknown> {
  if (!_client) {
    _client = new ApolloClient({
      dataMasking: true,
      credentials: "include",
      link: from([httpLink]),
      defaultOptions: {
        watchQuery: {
          nextFetchPolicy: "cache-and-network",
        },
        query: {
          fetchPolicy: "network-only",
        },
        mutate: {
          errorPolicy: "all",
        },
      },
      cache: new InMemoryCache({
        possibleTypes,
        typePolicies: {} as TypedTypePolicies,
      }),
    });
  }
  return _client;
}
