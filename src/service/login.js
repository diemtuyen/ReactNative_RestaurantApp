import request from './request';
import axios from 'axios';
import { API_BASE, LOGIN_URL, REGISTER_URL } from './api_constants';

function doLogin(username, password) {
  let params = {
    'username': username,
    'password': password,
    'grant_type': 'password',
    'client_id': 'mobile'
  };
  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
  // return request({ url: LOGIN_URL, method: 'POST', searchParams });
  let url = API_BASE + LOGIN_URL
  return axios.post(url, searchParams);
}

function doRegister(email, password) {
  const data = {
    email,
    password,
  };
  return request({ url: REGISTER_URL, method: 'POST', data });
}

export default {
  doLogin,
  doRegister,
};
