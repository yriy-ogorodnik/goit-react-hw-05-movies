import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db7375c0f22b53ce13cc7eb00cc2cfa1';
const trendingOptions = `trending/movie/day?api_key=${API_KEY}`;


export const fetchTrendingMovies = async () => {
   const response = await axios.get(
      `${trendingOptions}`
   )
   console.log("fetchTrendingMovies  response:", response.data)
   return response.data
}
