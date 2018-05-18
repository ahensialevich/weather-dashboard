import * as actions from '../Actions/index';
import axios from '../../http/axios.js';
import { GET_CITIES, CITIES_MOCK, GET_WEATHER } from '../../http/urls';
import { put } from 'redux-saga/effects';

export function* getAllCities() {
    console.log(axios);
    try {
        //const response = yield axios.get(GET_CITIES);
        yield put(actions.getAllCitiesSucceeded(CITIES_MOCK));
    } catch (err) {
        console.log(err);
    }
}

export function* refreshWeather(action) {
    try {
        const { cloudPercentage, rainAmount, temperature } = yield axios.get(GET_WEATHER + action.cityId);
        yield put(actions.refreshWeatherSucceeded(cloudPercentage, rainAmount, temperature));
    } catch (err) {
        console.log(err);
    }
}