import * as actions from '../Actions/index';
import axios from '../../http/axios.js';
import { GET_CITIES, GET_WEATHER } from '../../http/urls';
import { put } from 'redux-saga/effects';

export function* getAllCitiesSaga() {
    try {
        const response = yield axios.get(GET_CITIES);
        yield put(actions.getAllCitiesSucceeded(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* refreshWeatherSaga(action) {
    try {
        const response = yield axios.get(GET_WEATHER + action.cityId);
        const { cloudPercentage, rainAmount, temperature } = response.data;
        yield put(actions.refreshWeatherSucceeded(cloudPercentage, rainAmount, temperature, action.cityId));
    } catch (err) {
        console.log(err);
    }
}

export function* getSubscribedCitiesSaga() {
    const subscribedCities = JSON.parse(localStorage.getItem('subscribedCities'));
    if (subscribedCities) {
        yield put(actions.getSubscribedCities(subscribedCities));
    }
}