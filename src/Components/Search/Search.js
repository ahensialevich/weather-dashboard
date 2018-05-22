import React, { Component } from 'react';
import * as classes from './Search.scss';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';
import addButton from '../../assets/plus.png';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            citiesToSuggest: [],
            valid: false
        };
    }

    getSuggestions = value => {
        const inputValue = value.toLowerCase().trim();
        const suggestions = inputValue.length === 0 ? [] : this.props.cities.filter(x => x.name.toLowerCase().startsWith(inputValue));
        return suggestions.length > 10 ? suggestions.slice(0, 10) : suggestions;
    };

    getSuggestionValue = suggestion => suggestion.name;

    renderSuggestion = suggestion => <div className={classes.Suggestion}>{suggestion.name}</div>;

    onChange = (_, { newValue }) => {
        const isValid = this.checkValidity(newValue);
        this.setState({ value: newValue, valid: isValid });
    };

    checkValidity = newValue => {
        const findedCity = this.getSelectedCity(newValue);
        if (findedCity) {
            if (!this.props.subscribedCities.some(x => x.cityId === findedCity.id)) {
                return true;
            }
        }
        return false;
    }

    onSuggestionsClearRequested = () => this.setState({ citiesToSuggest: [] });

    onSuggestionsFetchRequested = ({ value }) => this.setState({ citiesToSuggest: this.getSuggestions(value) });

    onAddCity = () => {
        const { id, name } = this.getSelectedCity(this.state.value);
        this.props.onAddCity(id, name);
        this.props.onRefreshWeather(id);
        this.setState({ value: '' });
    }

    getSelectedCity = cityName => this.props.cities.find(x => x.name.toLowerCase() === cityName.toLowerCase());

    render() {
        const { value, citiesToSuggest } = this.state;
        const inputProps = {
            placeholder: 'Input city here...',
            value,
            type: 'text',
            className: classes.Search_bar,
            onChange: this.onChange
        }
        return (
            <div className={classes.Search_cont}>
                <Autosuggest
                    suggestions={citiesToSuggest}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    renderSuggestion={this.renderSuggestion}
                    getSuggestionValue={this.getSuggestionValue}
                    inputProps={inputProps} />
                <input type='image'
                    src={addButton}
                    alt='add-button'
                    disabled={!this.state.valid}
                    onClick={this.onAddCity}
                    className={classes.Add_button} />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    cities: state.weather.cities,
    subscribedCities: state.weather.subscribedCities
});

const mapDispatchToProps = dispatch => ({
    onAddCity: (cityId, cityName) => dispatch(actions.addCity(cityId, cityName)),
    onRefreshWeather: cityId => dispatch(actions.refreshWeather(cityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);