import { useState, useEffect } from "react";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../styles/card-page.scss";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../components/Footer";

type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  // API den gelecek
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "",
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "",
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "",
    quantity: 1,
  },
];

const CartPage = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=3"
        );
        const products = res.data as { image: string }[];

        setItems((prev) =>
          prev.map((item, index) => ({
            ...item,
            image: products[index]?.image || item.image,
          }))
        );
      } catch (error) {
        console.error("Cart images fetch error:", error);
        setItems((prev) =>
          prev.map((item) => ({
            ...item,
            image: item.image || "https://via.placeholder.com/150?text=Product",
          }))
        );
      }
    };

    fetchImages();
  }, []);

  const handleChangeQty = (id: number, delta: 1 | -1) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountRate = 0.2;
  const discountAmount = Math.round(subtotal * discountRate);
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <main className="cart-page">
      <div className="breadcrumbs">Home &gt; Cart</div>

      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {items.map((item) => (
            <article key={item.id} className="cart-row">
              <div className="cart-row__left">
                <div className="cart-row__image-wrap">
                  {item.image && <img src={item.image} alt={item.name} />}
                </div>

                <div className="cart-row__info">
                  <h3 className="cart-row__name">{item.name}</h3>
                  <p className="cart-row__meta">
                    Size: <span>{item.size}</span>
                  </p>
                  <p className="cart-row__meta">
                    Color: <span>{item.color}</span>
                  </p>

                  <div className="cart-row__price">${item.price}</div>
                </div>
              </div>

              <div className="cart-row__right">
                <button
                  className="cart-row__delete"
                  onClick={() => handleRemove(item.id)}
                  aria-label="Remove item"
                >
                  <DeleteOutlineIcon fontSize="small" />
                </button>

                <div className="cart-row__qty">
                  <button onClick={() => handleChangeQty(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleChangeQty(item.id, 1)}>+</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="order-summary">
          <h2 className="order-summary__title">Order Summary</h2>

          <div className="order-summary__row">
            <span>Subtotal</span>
            <span className="summory-subtotal-price">${subtotal}</span>
          </div>
          <div className="order-summary__row order-summary__row--discount">
            <span>Discount ({Math.round(discountRate * 100)}%)</span>
            <span className="summory-discount-price">- ${discountAmount}</span>
          </div>
          <div className="order-summary__row">
            <span>Delivery Fee</span>
            <span className="summory-delivery-price">${deliveryFee}</span>
          </div>

          <div className="order-summary__row order-summary__row--total">
            <span>Total</span>
            <span className="row-total-price">${total}</span>
          </div>

          <div className="order-summary__promo">
            <input
              type="text"
              placeholder="Add promo code"
              className="promo-input"
            />
            <button className="promo-apply">Apply</button>
          </div>

          <button className="checkout-btn">
            Go to Checkout <span className="arrow">→</span>
          </button>
        </aside>
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
      <Footer />
    </main>
  );
};

export default CartPage;
