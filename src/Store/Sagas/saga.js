import * as actions from '../Actions/index';
import axios from '../../http/axios.js';
import { GET_CITIES, CITIES_MOCK } from '../../http/urls';
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