import * as actionTypes from './actionTypes';

export const enableLoading = () => ({ type: actionTypes.ENABLE_LOADING });
export const disableLoading = () => ({ type: actionTypes.DISABLE_LOADING });
export const setError = error => ({ type: actionTypes.SET_ERROR, error });
export const removeError = () => ({ type: actionTypes.REMOVE_ERROR });