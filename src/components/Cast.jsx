import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'Api/Api';
import placeholder from 'images/placeholder.png';

const MovieCast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  const getMovieCast = async id => {
    try {
      const data = await fetchMovieCast(id);

      setCast(data.cast);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <StyledUl>
      {cast.map(({ character, id, name: actorName, profile_path }) => (
        <li key={id}>
          <div>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : `${placeholder}`
              }
              alt={actorName}
              width="300"
              loading="lazy"
            />
          </div>
          <div>
            <p>{actorName}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  li {
    margin-bottom: 12px;
  }
  div {
    padding: 5px;
    width: 300px;
  }
`;

export default MovieCast;
