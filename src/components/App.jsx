import { NavLink, Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movies';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
      <nav>
        <li><NavLink to="/home">Домашня</NavLink></li>
        <li><NavLink to="/movies">Колекція</NavLink></li>
      </nav>
      <Routes>
        <Route path="/" element={<div>Домашня</div>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/home" element={<Home/>} />

        <Route path="/home/:homeId" element={<div>Елемент Колекція dog-gggg</div>} />
      </Routes>
    </div>
  );
};
