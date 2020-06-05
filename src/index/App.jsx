import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';

function App(props) {
  return (
      <div className="App">

      </div>
  );
}

export default connect(
    function mapStateToProps(state){},
    function mapDispatchToProps(dispatch) {}
)(App);
