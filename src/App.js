import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
import axios from './http/axios';
import { GET_CITIES } from './http/urls';
import Avx from './hoc/Avx';
import Search from './Components/Search/Search';
import Grid from './Components/Grid/Grid';

class App extends Component {

  componentDidMount() {
    this.props.onGetAllCities();
  }

  render() {
    return (
      <Avx>
        <Search />
        <Grid />
      </Avx>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(actions.getAllCities())
});

export default connect(null, mapDispatchToProps)(App);