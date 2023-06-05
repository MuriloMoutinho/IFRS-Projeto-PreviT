import axios, { AxiosInstance } from "axios";
import { API_URL } from "../../constants";

const axiosConfig = {
  baseURL: API_URL,
  timeout: 5000,
  withCredentials: true,
};

export const axiosInstance: AxiosInstance = axios.create(axiosConfig);
