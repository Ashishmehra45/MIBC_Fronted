import axios from 'axios';

// Aapka base URL logic
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5001"
    : "https://mibc-backend-4.onrender.com";

// Axios instance creation
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Agar token bhejte ho hamesha, toh yahan add kar sakte ho:
    // "Authorization": `Bearer ${localStorage.getItem("mibc_token")}`
  },
});

export default api;