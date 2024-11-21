import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://shortyurlshortener.vercel.app",
  headers:{
    'Content-Type':'application/json'
  },
  withCredentials: true,
});

