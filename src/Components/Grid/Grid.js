import React, { Component } from 'react';
import * as classes from './Grid.scss';
import Widget from './Widget/Widget';
import { connect } from 'react-redux';

class Grid extends Component {
    render() {
        return (
            <div className={classes.Grid}>
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
                <Widget temperature='20' header='Wroclaw' cloudPercentage='90' rainAmount='0.8' />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    subscribedCities: state.subscribedCities
});

const mapDispatchToProps = dispatch => ({
    onRefresh: cityId => dispatch(),
    onDelete: cityId => dispatch()
});

export default connect(mapStateToProps)(Grid);