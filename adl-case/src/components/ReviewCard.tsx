import { Rating } from "react-simple-star-rating";
import "../styles/reviews-card.scss";

interface Props {
  name: string;
  verified: boolean;
  rating: number;
  date: string;
  comment: string;
}

const ReviewCard = ({ name, verified, rating, date, comment }: Props) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <Rating
          initialValue={rating}
          readonly
          size={20}
          fillColor="#FFC633"
          allowFraction
        />
      </div>

      <div className="review-author">
        <strong>{name}</strong>
        {verified && <span className="verified">✔</span>}
      </div>

      <p className="review-text">{comment}</p>

      <p className="review-date">Posted on {date}</p>
    </div>
  );
};

export default ReviewCard;
