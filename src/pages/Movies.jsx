import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'Api/Api';
import HomeCSS from './home.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  console.log('Movies  filter:', filter);

  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    setSearchParams({ filter: value });
  };

  // ______________________
  const getMoviesOnSearch = async query => {
    try {
      const { results } = await fetchMovieSearch(query);
      console.log('getMoviesOnSearch  results:', results);

      const resultArr = results.map(
        ({ id, original_title, poster_path, vote_average, vote_count }) => ({
          id,
          original_title,
          poster_path,
          vote_average,
          vote_count,
        })
      );

      setMovies(resultArr);
    } catch (error) {
      // setError(error);
    } finally {
    }
  };

  useEffect(() => {
    if (!filter) {
      return;
    }
    getMoviesOnSearch(filter);
  }, [filter]);

  // ______________________-

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          name="search"
          type="search"
          // onChange={handleChange}
          placeholder="Search movies..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">SEARCH</button>
      </form>
      <ul className={HomeCSS.movies}>
        {movies.map(
          ({ poster_path, original_title, name, id, vote_average }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `/movies?filter=${filter}` }}
              >
                <div>
                  <div className={HomeCSS.movie__cover__inner}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      className={HomeCSS.movie__cover}
                      alt={original_title}
                    />
                    <div className={HomeCSS.movie__cover__darkened}></div>
                  </div>
                  <div className={HomeCSS.movie__info}>
                    <div className={HomeCSS.movie__title}>
                      {original_title || name}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Movies;
