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
        default: {
            return state;
        }
    }
}

export default reducer;