import axios from "axios";
const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://api.artic.edu/api/v1/artworks"
      : "Production URL here",
  timeout: 30000,
});

// pagination api piece
/*
    artAPI.pagination.length // art on each page
    artAPI.length // how many pages
    artAPI.pagination[Math.random()].id[Math.random()]
    */

export default AxiosInstance;
