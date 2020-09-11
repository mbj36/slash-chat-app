import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from './ApolloSetup';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <Post />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
