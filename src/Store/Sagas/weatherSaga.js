import * as actions from '../Actions/index';
import axios from '../../http/axios.js';
import { GET_CITIES, GET_WEATHER } from '../../http/urls';
import { put } from 'redux-saga/effects';

export function* getAllCitiesSaga() {
    try {
        yield put(actions.enableLoading());
        const response = yield axios.get(GET_CITIES);
        yield put(actions.getAllCitiesSucceeded(response.data));
        yield put(actions.disableLoading());
    } catch (err) {
        yield put(actions.setError(err));
        yield put(actions.disableLoading());
    }
}

export function* refreshWeatherSaga(action) {
    try {
        yield put(actions.enableLoading());
        const response = yield axios.get(GET_WEATHER + action.cityId);
        const { cloudPercentage, rainAmount, temperature } = response.data;
        yield put(actions.refreshWeatherSucceeded(cloudPercentage, rainAmount, temperature, action.cityId));
        yield put(actions.disableLoading());
    } catch (err) {
        yield put(actions.setError(err));
        yield put(actions.disableLoading());
    }
}