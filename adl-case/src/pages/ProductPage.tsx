import { useState, useEffect } from "react";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import { Rating } from "react-simple-star-rating";
import "../styles/product-page.scss";
import ReviewHeader from "../components/ReviewHeader";
import AlsoLike from "../components/AlsoLike";
import Footer from "../components/Footer";
import ReviewTabs from "../components/ReviewTabs";
import ReviewsList from "../components/ReviewList";

const COLOR_OPTIONS = [
  { name: "Olive", value: "#4F4631" },
  { name: "Navy", value: "#314F4A" },
  { name: "Gold", value: "#31344F" },
];

const SIZE_OPTIONS = ["Small", "Medium", "Large", "X-Large"] as const;
type SizeOption = (typeof SIZE_OPTIONS)[number];

const ProductPage = () => {
  const [productImages, setProductImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].name);
  const [selectedSize, setSelectedSize] = useState<SizeOption>("Large");

  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/20")
      .then((res) => {
        const mainImage = res.data.image;

        const randomImages = [
          `https://picsum.photos/600?random=${Math.random()}`,
          `https://picsum.photos/600?random=${Math.random()}`,
        ];
        setProductImages([mainImage, ...randomImages]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="product-page">Loading...</div>;

  return (
    <main className="product-page">
      <div className="breadcrumbs">
        Home / Men / T-shirts / One Life Graphic T-shirt
      </div>

      <div className="product-hero">
        <div className="gallery">
          <div className="thumbnail-column">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt="product" />
              </button>
            ))}
          </div>

          <div className="main-image">
            <img src={productImages[selectedImage]} alt="Selected product" />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>

          <div className="rating">
            <Rating
              initialValue={4.5}
              readonly
              size={22}
              allowFraction
              fillColor="#FFC633"
            />

            <span className="score">4.5/5</span>
            <span className="reviews">4.5k reviews</span>
          </div>

          <div className="pricing">
            <span className="current-price">$260</span>
            <span className="old-price">$300</span>
            <span className="discount">-40%</span>
          </div>

          <p className="description">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="selector">
            <div className="selector-header">Select Colors</div>
            <div className="color-options">
              {COLOR_OPTIONS.map((color) => (
                <button
                  key={color.name}
                  className={`color-swatch ${
                    selectedColor === color.name ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color.name)}
                >
                  {selectedColor === color.name && (
                    <CheckIcon className="tick-icon" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="selector">
            <div className="selector-header">Choose Size</div>
            <div className="size-options">
              {SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  className={`size-pill ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="cta-main">
            <div className="count-box">
              <button onClick={() => setCount((c) => Math.max(1, c - 1))}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount((c) => c + 1)}>+</button>
            </div>

            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <ReviewTabs />
      <ReviewHeader />
      <ReviewsList />
      <AlsoLike />
      <Footer />
    </main>
  );
};

export default ProductPage;
