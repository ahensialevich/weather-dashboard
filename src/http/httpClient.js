import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from './urls';

const httpClient = axios.create({
    baseURL: BASE_URL
});
httpClient.interceptors.request.use(function (config) {
    config.headers = { ...config.headers, 'Authorization': AUTH_TOKEN }
    return config;
}, function (error) {
    return error;
});

export default httpClient;