import { useState, useEffect } from 'react';
import HomeCSS from './home.module.css';
import { fetchTrendingMovies } from 'components/Api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div>
      {/* цей рядок щоб сохранити на гідхаб */}
      {error && <p>Something went wrong :( Try again later!</p> && isLoading}
      <h1>Trending today</h1>
      <ul className={HomeCSS.movies}>
        {movies.map(
          ({ poster_path, original_title, name, id, vote_average }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: `/` }}>
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

export default Home;
