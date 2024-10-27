import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./styles.css";

function Header() {
  const { cartTotalQuantity } = useContext(AuthContext);
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
      <div className="gradient">Header</div>
      <nav>
        <NavLink to="/">
          {!localStorage.getItem("userDetails") ? "Login" : "Profile Details"}
        </NavLink>
        <NavLink to="/home">Home Page</NavLink>
        <NavLink to="/cart">Cart ({`${cartTotalQuantity} items`})</NavLink>
        <NavLink>{localStorage.getItem("userDetails") ? "Logout" : ""}</NavLink>
      </nav>
    </header>
  );
}

export default Header;
