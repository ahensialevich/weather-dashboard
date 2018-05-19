import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
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

const mapStateToProps = state => ({
  subscribedCities: state.subscribedCities
});

export default connect(mapStateToProps, mapDispatchToProps)(App);