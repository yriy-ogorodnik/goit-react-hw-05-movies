import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState , useRef} from 'react';
import { fetchMovieDetails } from 'components/Api';
import styled from 'styled-components';
import { BackLink } from 'components/Backlink';

const MovieDetails = () => {
  //params
  const { movieId } = useParams();
 
  const [movie, setMovie] = useState({});
  const location = useLocation();
 
  // const backLinkHref = location.state?.from ?? "/";
  const backLinkHref = useRef(location.state?.from ?? '/');
  

  const getMovieDetails = async id => {
   
    try {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    } catch (error) {
      
    } finally {
     
    }
  };
  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieDetails(movieId);
  }, [movieId]);

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
  } = movie;
  const userScore = (vote_average * 10).toFixed(1);
  const getYear = new Date(release_date).getFullYear();
  return (
    <>
    <BackLink  to={backLinkHref.current}>Back to products</BackLink>
      <StyleWraper>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt="poster"
          width="400"
          loading="lazy"
        />
        <div>
          <h1>
            {original_title} ({getYear})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres?.length &&
              genres.map(({ id, name }) => <span key={id}>{name} </span>)}
          </p>
        </div>
      </StyleWraper>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">
            <h4>Cast</h4>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <h4>Reviews</h4>
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;

const StyleWraper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`;
