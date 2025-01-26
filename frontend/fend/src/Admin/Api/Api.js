import axios from "axios";

// Base URL for the backend API
export const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

// Retrieve the authentication token from sessionStorage
export function AuthToken() {
  return sessionStorage.getItem("authToken");
}

// Retrieve the admin name from sessionStorage
export function AdminName() {
  return sessionStorage.getItem("AdminName");
}

// Set the authentication token in sessionStorage
export function setAuthToken(token) {
  sessionStorage.setItem("authToken", token);
}

// Clear session data and redirect to the login page
export function Logout() {
  sessionStorage.clear();
  window.location.href = "/Login"; // Redirect to the login page
}

// Axios instance for API calls
const api = axios.create({
  baseURL: API_URL,
});

// Add an interceptor to include the authentication token in headers
api.interceptors.request.use(
  (config) => {
    const token = AuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
