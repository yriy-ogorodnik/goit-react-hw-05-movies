import { Link } from "react-router-dom";


const Movies = () => {

// useEffect
// http

  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Search movies..."
        autoComplete="off"
        autoFocus
      />
      <button type="submit">SEARCH</button>
      
    </div>
    
  );
};

export default Movies;