import axios from "axios";

// 🔥 Base URL from environment
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// 🔐 Attach token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ⚠️ Handle response errors (optional but useful)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Unauthorized → token expired
      if (error.response.status === 401) {
        console.log("Unauthorized! Logging out...");
        localStorage.removeItem("token");
        window.location.href = "/login"; // redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default API;