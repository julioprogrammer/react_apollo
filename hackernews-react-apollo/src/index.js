import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

// 2
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3003/graphql'
});

// 3
const client = new ApolloClient({
  networkInterface
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);
registerServiceWorker();
