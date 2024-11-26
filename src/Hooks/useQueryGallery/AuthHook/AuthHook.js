// src/api/axiosInstance.js
import axios from 'axios';
import {store} from '../../../Redux/Store/Store.js';
import { handleAuth } from '../../../Redux/Slice/UserSlice/UserSlice';
// import { navigate } from './../utils/navigation';
// import { API_BASE_URL } from '../constants';
// import { ROUTES } from '../../routesName';
const appUrl = import.meta.env.VITE_REACT_APP_API_URL

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: appUrl,
});

// Request interceptor to attach access token
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();

    const accessToken = state.auth?.accessToken;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Flag to avoid multiple refresh requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, tokens = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(tokens);
    }
  });

  failedQueue = [];
};

// Response interceptor to handle 401 errors and refresh tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.endsWith('/token')
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((tokens) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + tokens.accessToken;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const state = store.getState();
      const refreshToken = state.auth?.refreshToken;

      if (!refreshToken) {
        // No refresh token, logout user
        store.dispatch(handleAuth());
        // navigate(ROUTES.LOGIN);
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${appUrl}/token`, {
          refreshToken,
        });
        

        const newAccessToken = response.data.accessToken;
        
        store.dispatch(
          handleAuth({
            
              accessToken: newAccessToken,
        
          })
        );

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        processQueue(null, {
          accessToken: newAccessToken,
        });

        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(handleAuth());
        // navigate(ROUTES.LOGIN);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;