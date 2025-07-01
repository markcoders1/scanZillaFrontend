// src/api/axiosInstance.js
import axios from "axios";
import { store } from "../../../Redux/Store/Store.js";
import { handleAuth } from "../../../Redux/Slice/UserSlice/UserSlice";

import { navigate } from "../../../utilis/navigattion.js";
import SnackAlert from "../../../Components/SnackAlert/SnackAlert.jsx";

import { ROUTES } from "./Routes.js";
import { handleSnackAlert } from "../../../Redux/Slice/SnackAlertSlice/SnackAlertSlice.js";
const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

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
      config.headers["Authorization"] = `Bearer ${accessToken}`;
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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 503) {
      sessionStorage.clear();
      localStorage.clear();
      store.dispatch(
        handleAuth({
          accessToken: null,
          refreshToken: null,
          authenticated: false,
        })
      );
      navigate("/maintenance");
    }
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.endsWith("/token")
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((tokens) => {
            originalRequest.headers["Authorization"] =
              "Bearer " + tokens.accessToken;
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
      console.log(refreshToken);
      if (!refreshToken) {
        store.dispatch(
          handleAuth({
            accessToken: null,
            refreshToken: null,
            authenticated: false,
          })
        );
        store.dispatch({
          message: "Your session has expired. Please log in again to continue.",
          severity: "error",
          open: true,
        });
        navigate("/");
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${appUrl}/token`, {
          refreshToken,
        });

        console.log("403 response", response.status);

        const newAccessToken = response.data.accessToken;

        store.dispatch(
          handleAuth({
            accessToken: newAccessToken,
          })
        );

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        processQueue(null, {
          accessToken: newAccessToken,
        });

        return axiosInstance(originalRequest);
      } catch (err) {
        console.log(err);
        processQueue(err, null);
        store.dispatch(
          handleAuth({
            accessToken: null,
            refreshToken: null,
            authenticated: false,
          })
        );
        navigate("/");
        store.dispatch({
          message: "Your session has expired. Please log in again to continue.",
          severity: "error",
          open: true,
        });

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
