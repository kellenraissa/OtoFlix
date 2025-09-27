import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_TMDB_BASE_URL!;
const token = process.env.EXPO_PUBLIC_TMDB_TOKEN!;

export const tmdbApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json",
  },
  timeout: 15000,
});
