import { getAllCities, refreshWeather } from './saga';
import * as actionTypes from '../Actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* watchSaga() {
    yield takeEvery(actionTypes.GET_ALL_CITIES, getAllCities);
    yield takeEvery(actionTypes.REFRESH_WEATHER, refreshWeather);
}