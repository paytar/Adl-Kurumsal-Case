import ReviewCard from "./ReviewCard";
import "../styles/reviews-list.scss";
import { reviews } from "./Reviews";

const ReviewsList = () => {
  return (
    <div className="reviews-list">
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}

      <button className="load-more">Load More Reviews</button>
    </div>
  );
};

export default ReviewsList;
