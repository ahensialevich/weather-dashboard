import * as actions from '../Actions/index';
import axios from '../../http/axios.js';
import { GET_CITIES } from '../../http/urls';
import { put } from 'redux-saga/effects';

export function* getAllCities() {
    console.log(axios);
    try {
        const response = yield axios.get(GET_CITIES);
        yield put(actions.getAllCitiesSucceeded(response));
    } catch (err) {
        console.log(err);
    }
}