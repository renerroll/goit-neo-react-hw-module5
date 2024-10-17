import axios from "axios";

const API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWRiMWExZTlhYmFkYjc0YWJhZjc2MTg4NzJmZjJhOSIsIm5iZiI6MTcyOTE1MTIxMy4wNDI1LCJzdWIiOiI2NzEwYmM3Y2RiNzljOWNlYWUwZWRiNDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FAawTdUpXj4jN0vhiUpuQX5cVEPn3YVEJzvW8gKCGq8';
const API_KEY = "6edb1a1e9abadb74abaf7618872ff2a9";
const baseURL = "https://api.themoviedb.org/3";

const apiService = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
});

export const fetchMovies = async () => {
  try {
    const response = await apiService.get("/movie/popular", {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await apiService.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await apiService.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await apiService.get(`/search/movie`, {
      params: {
        query,
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
