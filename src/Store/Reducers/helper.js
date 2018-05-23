import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    error: false,
    loading: false
}

const helperReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ENABLE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DISABLE_LOADING:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SET_ERROR: {
            return {
                ...state,
                error: true
            }
        }
        case actionTypes.REMOVE_ERROR: {
            return {
                ...state,
                error: false
            }
        }
        default: {
            return state;
        }
    }
}

export default helperReducer;