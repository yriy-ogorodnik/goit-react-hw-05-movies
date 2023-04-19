import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'Api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  const [error, setError] = useState(null);

  const getMovieReviews = async id => {
    try {
      const { results } = await fetchMovieReviews(id);

      const resultArr = results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      if (!results.length) {
        console.log('dddd');
        throw new Error(`We don't have any reviews for this movie :(`);
      }

      setReviews(resultArr);
    } catch (error) {
      setError(error);
    } finally {
    }
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error.message}</p>}
      {reviews.map(review => (
        <div key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
