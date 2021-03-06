import React, { Component } from 'react';
import Header from './Header'
import Route from '../routes'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Route />
        </div>
      </div>
    )
  }
};

export default App;
