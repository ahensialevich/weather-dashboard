import React, { Component } from 'react';
import * as classes from './Grid.scss';
import Widget from './Widget/Widget';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

class Grid extends Component {

    onRefreshWeatherHandler = cityId => this.props.onRefresh(cityId);
    onDeleteCityHandler = cityId => this.props.onDelete(cityId);

    render() {
        const widgets = this.props.subscribedCities.map(city => (
            <Widget
                key={city.cityId}
                temperature={city.temperature}
                header={city.cityName}
                cloudPercentage={city.cloudPercentage}
                rainAmount={city.rainAmount}
                onRefreshWeather={this.onRefreshWeatherHandler(city.cityId)}
                onDeleteWidget={this.onDeleteCityHandler(city.cityId)}
            />));
        return (
            <div className={classes.Grid}>
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='40' rainAmount='0.8' />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    subscribedCities: state.subscribedCities
});

const mapDispatchToProps = dispatch => ({
    onRefresh: cityId => dispatch(actions.refreshWeather(cityId)),
    onDelete: cityId => dispatch()
});

export default connect(mapStateToProps)(Grid);