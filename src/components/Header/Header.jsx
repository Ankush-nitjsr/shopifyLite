import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "./styles.css";
import Button from "../../ui/buttons/Button";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";
import { logout } from "../../lib/logout";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { cartTotalQuantity } = useContext(ProductContext);
  const [isScrolling, setIsScrolling] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // execute logout function
    setIsAuthenticated(""); // Clear authentication
    navigate("/"); // navigate to login page
  };

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
        {localStorage.getItem("userDetails") && (
          <Button
            onClick={handleLogout}
            variant="link"
            className="nav-link gap-2 text-black"
          >
            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
