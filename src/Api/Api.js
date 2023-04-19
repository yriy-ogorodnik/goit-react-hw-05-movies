import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db7375c0f22b53ce13cc7eb00cc2cfa1';
const trendingOptions = `trending/movie/day?api_key=${API_KEY}`;

// список найпопулярніших фільмів на сьогодні
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${trendingOptions}`);

  return response.data;
};

// запит повної інформації про фільм для сторінки кінофільму.
export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

//  запит інформації про акторський склад для сторінки кінофільму.Cast

export const fetchMovieCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

//  запит оглядів для сторінки кінофільму Reviews

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
};

//  пошук фільму за ключовим словом на сторінці фільмів.

export const fetchMovieSearch = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};
