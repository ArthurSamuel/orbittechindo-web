/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface IRequest {
  url: string;
  data?: any;
  params?: any;
}

/**
 * Create Axios Instance with default
 */
export const apiInstance = axios.create({
  timeout: 3000,
  baseURL: "https://api.themoviedb.org/3",
});

// request interceptors
apiInstance.interceptors.request.use(async (config) => {
  // custom request interceptors
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2U0NTgzNjdjNTlkYjE0M2UzZjdiZDFjZWVjZGViNSIsIm5iZiI6MTc0MTI1MDEyNS44OTY5OTk4LCJzdWIiOiI2N2M5NWU0ZGZiNDQwMmRjZTEwMzRlNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1oR771so4xpyBpqnLsjQrfRNdvekCQRfeLc_3E8416w`;
  if (token) {
    //config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err: any) => {
    return Promise.reject(err);
  }
);

const get = <T = any>({ url, params }: IRequest) => {
  let urlTarget = url;
  // Build url to params
  if (params) {
    urlTarget += "?";
    Object.keys(params).forEach((item) => {
      if (params[item]) {
        urlTarget += `${item}=${params[item]}&`;
      }
    });
    // remove last &
    urlTarget = urlTarget.substring(0, urlTarget.length - 1);
  }
  return apiInstance.get<T>(urlTarget);
};

const Http = {
  get,
};

export default Http;
