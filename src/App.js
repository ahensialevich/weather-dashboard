import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
import Avx from './hoc/Avx';
import Search from './Components/Search/Search';
import Grid from './Components/Grid/Grid';
import Spinner from './UI/Spinner/Spinner';

class App extends Component {

  componentDidMount() {
    this.props.onGetAllCities();
  }

  render() {
    return this.props.loading ? <Spinner /> : (<Avx><Search /><Grid /></Avx>);
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(actions.getAllCities())
});

const mapStateToProps = state => ({
  subscribedCities: state.weather.subscribedCities,
  loading: state.helper.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);