import axios from "axios";

const API_KEY = "cae0a964";  // Replace with your real API key
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (title) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: title
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data.Search;
};