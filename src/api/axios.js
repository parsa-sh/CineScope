import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
   baseURL: baseURL,
   headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
   },
});

export default api;
