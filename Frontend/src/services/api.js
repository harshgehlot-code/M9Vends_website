import axios from "axios";

// Environment-based API URL (Vite uses import.meta.env)
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// Create axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`, // ensure /api prefix once
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // increased timeout for Render cold start
});

export default api;