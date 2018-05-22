import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './Store/Actions/index';
import Wrapper from './Components/Wrapper/Wrapper';
import Search from './Components/Search/Search';
import Grid from './Components/Grid/Grid';
import Spinner from './Components/Spinner/Spinner';
import Header from './Components/Header/Header';

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
    return (
      <Wrapper>
        {loading}
        <Header />
        <Search />
        <Grid />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetAllCities: () => dispatch(actions.getAllCities()),
  onSetSubscribedCitiesFromLocalStorage: cities => dispatch(actions.setSubscribedCitiesFromLocalStorage(cities))
});

const mapStateToProps = state => ({
  subscribedCities: state.weather.subscribedCities,
  loading: state.helper.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);