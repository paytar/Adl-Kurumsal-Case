import { Rating } from "react-simple-star-rating";
import "../styles/recommended.scss";

const products = [
  {
    img: "https://picsum.photos/300?1",
    title: "Polo with Contrast Trims",
    rating: 4,
    price: "$212",
    oldPrice: "$242",
    discount: "-20%",
  },
  {
    img: "https://picsum.photos/300?2",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
  },
  {
    img: "https://picsum.photos/300?3",
    title: "Polo with Tipping Details",
    rating: 4.5,
    price: "$180",
  },
  {
    img: "https://picsum.photos/300?4",
    title: "Black Stripped T-shirt",
    rating: 5,
    price: "$120",
    oldPrice: "$150",
    discount: "-30%",
  },
];

const RecommendedProducts = () => {
  return (
    <section className="recommended">
      <h2 className="title">YOU MIGHT ALSO LIKE</h2>

      <div className="product-grid">
        {products.map((item, i) => (
          <div key={i} className="product-card">
            <img src={item.img} className="product-image" />

            <h3 className="name">{item.title}</h3>

            <div className="rating-row">
              <Rating
                initialValue={item.rating}
                readonly
                size={18}
                allowFraction
                fillColor="#FFC633"
              />
              <span className="rating-text">{item.rating}/5</span>
            </div>

            <div className="price-row">
              <span className="price">{item.price}</span>
              {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
              {item.discount && (
                <span className="discount">{item.discount}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
