import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://petgram-api-frankiiize.vercel.app/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
  )