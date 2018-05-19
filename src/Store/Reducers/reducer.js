import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    cities: [],
    subscribedCities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CITIES_SUCCEEDED: {
            return {
                ...state,
                cities: action.cities
            }
        }
        case actionTypes.ADD_CITY: {
            return {
                ...state,
                subscribedCities: [...state.subscribedCities, { cityId: action.cityId, cityName: action.cityName }]
            }
        }
        case actionTypes.REFRESH_WEATHER_SUCCEEDED: {
            const cityIndex = state.subscribedCities.findIndex(x => x.cityId === action.cityId);
            const cities = [...state.subscribedCities];
            cities[cityIndex] = {
                ...cities[cityIndex],
                cloudPercentage: action.cloudPercentage,
                rainAmount: action.rainAmount,
                temperature: action.temperature
            }
            return {
                ...state,
                subscribedCities: cities
            }
        }
        case actionTypes.DELETE_CITY: {
            const cityIndex = state.subscribedCities.findIndex(x => x.cityId === action.cityId);
            let cities = [...state.subscribedCities];
            cities.splice(cityIndex, 1);
            return {
                ...state,
                subscribedCities: cities
            }
        }
        case actionTypes.GET_SUBSCRIBED_CITIES_SUCCEEDED: {
            return {
                ...state,
                subscribedCities: action.cities
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;