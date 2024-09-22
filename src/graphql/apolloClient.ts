import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {console.error(`GraphQL error: ${message}`)});
  }
  if (networkError) {
    console.error(`Network error: ${networkError.message || networkError}`);
  }
});

const httpLink = new HttpLink({ 
  uri: process.env.NEXT_PUBLIC_GQL_ENDPOINT
});

const link = from([errorLink, httpLink]);
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
