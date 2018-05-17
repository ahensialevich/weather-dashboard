import * as actionTypes from './actionTypes';

export const addCity = () => ({ type: actionTypes.ADD_CITY });
export const getAllCities = () => ({ type: actionTypes.GET_ALL_CITIES });
export const getAllCitiesSucceeded = cities => ({ type: actionTypes.GET_ALL_CITIES_SUCCEEDED, cities });