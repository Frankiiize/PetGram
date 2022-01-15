import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
const httpLink = createHttpLink({
  uri: 'https://petgram-api-frankiiize.vercel.app/graphql',
})

const authLink = setContext((_, {headers}) => {
  const token = window.sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: ""
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      );
      window.sessionStorage.removeItem('token');
      if (networkError){
        console.log(`[Network error]: ${networkError}`);
      } 
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)) ,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App  client={client}/>
  </ApolloProvider>,
  document.getElementById('root')
  )