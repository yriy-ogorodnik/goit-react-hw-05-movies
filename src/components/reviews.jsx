import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'components/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  const getMovieReviews = async id => {
    try {
      const { results } = await fetchMovieReviews(id);

      const resultArr = results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));

      setReviews(resultArr);
    } catch (error) {
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
