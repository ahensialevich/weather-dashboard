import React, { Component } from 'react';
import Main from './Containers/Main/Main';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
import axios from './http/axios';
import { GET_CITIES } from './http/urls';

class App extends Component {

  async componentDidMount() {
    this.props.onGetAllCities();
  }

  render() {
    return (<Main />);
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(actions.getAllCities())
});

export default connect(null, mapDispatchToProps)(App);