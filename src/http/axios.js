import axios from 'axios';
import { BASE_URL, AUTH_TOKEN } from './urls';

const instance = axios.create({
    baseURL: BASE_URL
});
instance.interceptors.request.use(function (config) {
    config.headers = { ...config.headers, 'Authorization': AUTH_TOKEN }
    return config;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});

export default instance;