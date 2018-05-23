import * as helperActions from '../Actions/helper';
import * as weatherActions from '../Actions/weather';
import httpClient from '../../http/httpClient';
import { GET_CITIES, GET_WEATHER } from '../../http/urls';
import { put } from 'redux-saga/effects';

export function* getAllCitiesSaga() {
    try {
        yield put(helperActions.enableLoading());
        const response = yield httpClient.get(GET_CITIES);
        yield put(weatherActions.getAllCitiesSucceeded(response.data));
        yield put(helperActions.disableLoading());
    } catch (err) {
        yield put(helperActions.setError(err));
        yield put(helperActions.disableLoading());
    }
}

export function* refreshWeatherSaga(action) {
    try {
        yield put(helperActions.enableLoading());
        const response = yield httpClient.get(GET_WEATHER + action.cityId);
        const { cloudPercentage, rainAmount, temperature } = response.data;
        yield put(weatherActions.refreshWeatherSucceeded(cloudPercentage, rainAmount, temperature, action.cityId));
        yield put(helperActions.disableLoading());
    } catch (err) {
        yield put(helperActions.setError(err));
        yield put(helperActions.disableLoading());
    }
}

export function* setSubscribedCitiesFromLocalStorageSaga(action) {
    try {
        yield put(helperActions.enableLoading());
        const requests = action.subscribedCities.map(city => httpClient.get(GET_WEATHER + city.cityId));
        let response = yield Promise.all(requests);
        response = response.map(x => x.data);
        const subscribedCities = action.subscribedCities.map((city, index) => ({ ...city, ...response[index] }));
        yield put(weatherActions.setSubscribedCitiesFromLocalStorageSucceded(subscribedCities));
        yield put(helperActions.disableLoading());
    } catch (err) {
        yield put(helperActions.setError(err));
        yield put(helperActions.disableLoading());
    }
}