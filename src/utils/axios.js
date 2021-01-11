import axios from 'axios';

const API_PROD_URL = 'https://staging-api.estackk.com';
const malina = 'http://134.249.227.172:2000';

const axiosInstance = axios.create({
  baseURL: API_PROD_URL,
  timeout: 7000,
});
 
export const setAuthHeader = (accessToken) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const resetAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;
