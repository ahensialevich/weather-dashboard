import * as actionTypes from './actionTypes';

export const addCity = (cityId, cityName) => ({ type: actionTypes.ADD_CITY, cityId, cityName });
export const getAllCities = () => ({ type: actionTypes.GET_ALL_CITIES });
export const getAllCitiesSucceeded = cities => ({ type: actionTypes.GET_ALL_CITIES_SUCCEEDED, cities });
export const setSubscribedCitiesFromLocalStorage = subscribedCities => ({ type: actionTypes.SET_SUBSCRIBED_CITIES_FROM_LOCAL_STORAGE, subscribedCities });
export const setSubscribedCitiesFromLocalStorageSucceded = subscribedCities => ({ type: actionTypes.SET_SUBSCRIBED_CITIES_FROM_LOCAL_STORAGE_SUCCEDED, subscribedCities });

export const refreshWeather = cityId => ({ type: actionTypes.REFRESH_WEATHER, cityId });
export const refreshWeatherSucceeded = (cloudPercentage, rainAmount, temperature, cityId) => ({ type: actionTypes.REFRESH_WEATHER_SUCCEEDED, cloudPercentage, rainAmount, temperature, cityId });

export const deleteCity = cityId => ({ type: actionTypes.DELETE_CITY, cityId });

export const getSubscribedCities = () => ({ type: actionTypes.GET_SUBSCRIBED_CITIES });
export const getSubscribedCitiesSucceeded = subscribedCities => ({ type: actionTypes.GET_SUBSCRIBED_CITIES, subscribedCities });