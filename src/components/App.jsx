import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from './reviews';

export const App = () => {
  return (
    <div>
      <StyledContainer>
        <StyledHeader>
          <nav>
            <ul>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </ul>
          </nav>
        </StyledHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  padding: 0 16px;
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 0px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  & ul {
    display: flex;
  }
  & li {
    margin-right: 32px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #212121;
  font-size: 22px;
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  &.active {
    color: orangered;
  }
`;
