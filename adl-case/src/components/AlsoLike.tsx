import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/also-like.scss";
import { Rating } from "react-simple-star-rating";
import EmailIcon from "@mui/icons-material/Email";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
}

const AlsoLike = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=4").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="also-like">
      <h2 className="title">YOU MIGHT ALSO LIKE</h2>

      <div className="product-list">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="image-box">
              <img src={p.image} alt={p.title} />
            </div>

            <h3 className="product-name">{p.title}</h3>

            <div className="rating-row">
              <Rating
                initialValue={p.rating.rate}
                readonly
                size={18}
                allowFraction
                fillColor="#FFC633"
              />
              <span className="rating-text">{p.rating.rate}/5</span>
            </div>

            <div className="price-row">
              <span className="price">${p.price}</span>
            </div>
          </div>
        ))}
      </div>

     <div className="newsletter">
        <div className="newsletter-container">
          <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        </div>

        <div className="newsletter-box">
          <div className="input-wrapper">
            <EmailIcon className="email-icon" />
            <input type="text" placeholder="Enter your email address" />
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
