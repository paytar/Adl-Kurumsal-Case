import "../styles/footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="logo">SHOP.CO</h2>
          <p className="brand-desc">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>

          <div className="social-icons">
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <GitHubIcon className="icon" />
          </div>
        </div>

        <div className="footer-columns">
          <div className="col">
            <h4>COMPANY</h4>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>

          <div className="col">
            <h4>HELP</h4>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="col">
            <h4>FAQ</h4>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>

          <div className="col">
            <h4>RESOURCES</h4>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="cards">
          <img src="/public/visa.png" alt="Visa" />
          <img src="/public/mastercard.png" alt="Mastercard" />
          <img src="/public/paypal.png" alt="Paypal" />
          <img src="/public/applepay.png" alt="Apple Pay" />
          <img src="/public/googlepay.png" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
