import * as actionTypes from './actionTypes';

export const addCity = (cityId, cityName) => ({ type: actionTypes.ADD_CITY, cityId, cityName });
export const getAllCities = () => ({ type: actionTypes.GET_ALL_CITIES });
export const getAllCitiesSucceeded = cities => ({ type: actionTypes.GET_ALL_CITIES_SUCCEEDED, cities });