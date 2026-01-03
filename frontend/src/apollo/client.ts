import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Directly pointing to localhost for browser-side access
    cache: new InMemoryCache(),
});
