// @flow
import React, { Component } from 'react';
// TODO: styles
import FilteredFeed from './containers/FilteredFeed/FilteredFeed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FilteredFeed />
      </div>
    );
  }
}

export default App;
