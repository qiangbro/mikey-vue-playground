"use strict";

import Vue from 'vue';
import axios from "axios";
import qs from 'qs'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

const API_HOME = 'http://127.0.0.1:8086'; //dev

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if (config.url.substr(0,2) === '~/') {
      if (localStorage.sysuser_token) {
        config.headers['Authorization'] = 'Bearer '+ localStorage.sysuser_token;
      }

      // 替换api前缀
      config.url = API_HOME + config.url.substr(1);

      // 用qs替代axios原配的paramsSerializer
      config.paramsSerializer = function(params) {
        return qs.stringify(params, {arrayFormat: 'repeat'})
      };

      // 添加语言信息头
      // config.headers['KNX_UI_LOCALE'] = i18n.locale;


    }
    return config;

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
