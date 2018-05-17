import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    cities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_CITIES_SUCCEEDED: {
            return {
                ...state,
                cities: action.cities
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;