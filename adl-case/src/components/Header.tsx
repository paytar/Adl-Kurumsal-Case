import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { RiCloseFill } from "react-icons/ri";
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); 

  const navigate = useNavigate();

  if (!visible) return null;

  return (
    <header className="header">
      <div className="top-strip">
        <p>
          Sign up and get 20% off your first order. <span>Sign Up Now</span>
        </p>

        <div className="close-x" onClick={() => setVisible(false)}>
          <RiCloseFill size={20} />
        </div>
      </div>

      <div className="header-inner">
        <button
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <MenuIcon fontSize="medium" />
        </button>

        <div className="logo" onClick={() => navigate("/home")}>SHOP.CO</div>

        <nav className="nav">
          <div
            className="nav-item dropdown-trigger"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Shop <KeyboardArrowDownIcon fontSize="small" />
            {openDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Men</div>
                <div className="dropdown-item">Women</div>
                <div className="dropdown-item">Shoes</div>
              </div>
            )}
          </div>

          <div className="nav-item">On Sale</div>
          <div className="nav-item">New Arrivals</div>
          <div className="nav-item">Brands</div>
        </nav>

        <div className="search-wrapper">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
        </div>

        <div className="icons">
  <SearchIcon className="icon-svg" />
  <img
    src="./public/shop.png"
    alt="shop icon"
    className="icon-image"
    onClick={() => navigate("/cart")}   
  />
  <img
    src="./public/user.png"
    alt="user icon"
    className="icon-image"
  />
</div>

      </div>

      {menuOpen && (
        <nav className="nav-mobile">
          <div className="nav-item">Shop</div>
          <div className="nav-item">On Sale</div>
          <div className="nav-item">New Arrivals</div>
          <div className="nav-item">Brands</div>
        </nav>
      )}
    </header>
  );
};

export default Header;
