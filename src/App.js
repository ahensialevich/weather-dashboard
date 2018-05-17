import React, { Component } from 'react';
import Main from './Containers/Main/Main';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
import axios from './http/axios';

class App extends Component {

  async componentDidMount() {
    await axios.get('https://jsonplaceholder.typicode.com/posts/');
  }

  render() {
    return (<Main />);
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(actions.getAllCities())
});

export default connect(null, mapDispatchToProps)(App);