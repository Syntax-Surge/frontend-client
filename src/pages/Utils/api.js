import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6000/api", // Replace with your backend API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
