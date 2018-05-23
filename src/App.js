import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './Store/Actions/weather';
import * as helperActions from './Store/Actions/helper';
import Wrapper from './Components/Wrapper/Wrapper';
import Search from './Components/Search/Search';
import Grid from './Components/Grid/Grid';
import Spinner from './Components/Spinner/Spinner';
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';

class App extends Component {

  componentDidMount() {
    this.props.onGetAllCities();
    window.addEventListener('beforeunload', this.componentCleanup);
    let subscribedCities = localStorage.getItem('subscribedCities');
    if (subscribedCities) {
      subscribedCities = JSON.parse(subscribedCities);
      this.props.onSetSubscribedCitiesFromLocalStorage(subscribedCities);
    }
  }

  componentCleanup = () => {
    console.log(this.props.subscribedCities);
    if (this.props.subscribedCities.length > 0) {
      localStorage.setItem('subscribedCities', JSON.stringify(this.props.subscribedCities));
    }
  }

  render() {
    const loading = this.props.loading ? <Spinner /> : null;
    const error = this.props.error ? <Error close={this.props.onCloseError} /> : null;
    return (
      <Wrapper>
        {loading}
        {error}
        <Header />
        <Search />
        <Grid />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(weatherActions.getAllCities()),
  onSetSubscribedCitiesFromLocalStorage: subscribedCities => dispatch(weatherActions.setSubscribedCitiesFromLocalStorage(subscribedCities)),
  onCloseError: () => dispatch(helperActions.removeError())
});

const mapStateToProps = state => ({
  subscribedCities: state.weather.subscribedCities,
  loading: state.helper.loading,
  error: state.helper.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);