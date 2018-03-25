// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
// TODO: styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"></div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
