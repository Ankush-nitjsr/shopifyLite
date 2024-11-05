import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "./styles.css";

const Header = () => {
  const { cartTotalQuantity } = useContext(ProductContext);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolling ? "scrolled" : ""}>
      <nav>
        <NavLink to="/profile" className="nav-link">
          Profile Details
        </NavLink>
        <NavLink to="/home" className="nav-link">
          Home Page
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart ({`${cartTotalQuantity} items`})
        </NavLink>
        <NavLink to="/" className="nav-link">
          {!localStorage.getItem("userDetails") ? "Login" : "Logout"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
