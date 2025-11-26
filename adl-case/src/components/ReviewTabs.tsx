import "../styles/reviews-tabs.scss";

const ReviewTabs = () => {
  return (
    <div className="review-tabs">
      <div className="tab">Product Details</div>
      <div className="tab active">Rating & Reviews</div>
      <div className="tab">FAQs</div>
    </div>
  );
};

export default ReviewTabs;
