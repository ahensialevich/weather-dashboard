import { getAllCitiesSaga, refreshWeatherSaga } from './weatherSaga';
import * as actionTypes from '../Actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* rootSaga() {
    yield takeEvery(actionTypes.GET_ALL_CITIES, getAllCitiesSaga);
    yield takeEvery(actionTypes.REFRESH_WEATHER, refreshWeatherSaga);
}