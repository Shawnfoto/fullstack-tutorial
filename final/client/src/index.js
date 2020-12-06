import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
  gql,
  useQuery
} from '@apollo/client';

import injectStyles from './styles';


import App from './App';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;
const client = new ApolloClient({
  uri: "https://app---staging.qonver.com/api",
  cache: new InMemoryCache()
});

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: 'http://localhost:4000/graphql',
//   // headers: {
//   //   authorization: localStorage.getItem('token') || '',
//   //   'client-name': 'Space Explorer [web]',
//   //   'client-version': '1.0.0',
//   // },
//   // typeDefs,
//   resolvers: {},
// });

/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */




injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
