import React, { Component } from 'react';
import * as classes from './Grid.scss';
import Widget from './Widget/Widget';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

class Grid extends Component {

    onRefreshWeatherHandler = cityId => this.props.onRefresh(cityId);
    onDeleteCityHandler = cityId => this.props.onDelete(cityId);

    render() {
        let widgets = null;
        if (this.props.subscribedCities.length > 0) {
            widgets =
                <div className={classes.Grid}>
                    {
                        this.props.subscribedCities.map(city => (
                            <Widget
                                cityId={city.cityId}
                                key={city.cityId}
                                temperature={city.temperature}
                                header={city.cityName}
                                cloudPercentage={city.cloudPercentage}
                                rainAmount={city.rainAmount}
                                onRefreshWeather={this.onRefreshWeatherHandler}
                                onDeleteWidget={this.onDeleteCityHandler}
                            />))
                    }
                </div>
        } else {
            widgets = <div className={classes.No_Cities}>Please, add some cities!</div>
        }
        return widgets;
    }
};

const mapStateToProps = state => ({
    subscribedCities: state.weather.subscribedCities
});

const mapDispatchToProps = dispatch => ({
    onRefresh: cityId => dispatch(actions.refreshWeather(cityId)),
    onDelete: cityId => dispatch(actions.deleteCity(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);