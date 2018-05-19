import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    error: null,
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
                error: action.error
            }
        }
        case actionTypes.REMOVE_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        default: {
            return state;
        }
    }
}

export default helperReducer;