import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../styles/review-header.scss";

const ReviewHeader = () => {
  return (
    <div className="review-header">
      <h2 className="review-title">
        All Reviews{" "}
        <span className="count">
          <p className="count-inline">(451)</p>
        </span>
      </h2>

      <div className="btn-group">
      <button className="filter-btn">
        <TuneIcon />
      </button>

      <button className="latest-btn">
        Latest
        <ArrowDropDownIcon className="arrow-icon" />
      </button>

      <button className="write-review-btn"> <span className="write-review-btn-text">Write a Review</span> </button>
      </div>
    </div>
  );
};

export default ReviewHeader;
