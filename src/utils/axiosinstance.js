import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SNACK_API_URL,
  timeout: 1000,
  headers: {
    "api-key": process.env.NEXT_PUBLIC_SNACK_API_KEY,
  },
});

export default instance;
