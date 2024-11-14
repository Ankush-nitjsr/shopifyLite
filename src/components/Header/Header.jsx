import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "./styles.css";
import Button from "../../ui/buttons/Button";
import {
  ArrowRightStartOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { logout } from "../../lib/logout";
import { AuthContext } from "../../contexts/AuthContext";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { SearchProduct } from "../search-product/SearchProduct";
import { useGetProducts } from "../../hooks/useGetProducts";
import { productPropTypes } from "../../lib/productPropTypes";
import PropTypes from "prop-types";

const Header = ({ setSearchFlag, setSearchedProducts }) => {
  const { data } = useGetProducts();
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
        <NavLink className="flex items-center">
          <ShoppingBagIcon className="w-10 h-10 text-[#ffa500]" />
          <p className="font-medium text-xl pt-1">
            <span className="text-4xl text-[#ffa500]">S</span>
            <span>hop</span>
          </p>
        </NavLink>
        <SearchProduct
          allProducts={data}
          setSearchFlag={setSearchFlag}
          setSearchedProducts={setSearchedProducts}
        />
        <NavLink to="/profile" className="nav-link whitespace-nowrap">
          Profile Details
        </NavLink>
        <NavLink to="/home" className="nav-link whitespace-nowrap">
          Home Page
        </NavLink>
        <NavLink to="/cart" className="nav-link flex gap-1 relative">
          {/* Display cartTotalQuantity only if greater than zero */}
          {cartTotalQuantity > 0 && (
            <p className="cart-badge w-5 h-5 rounded-md border border-black flex justify-center items-center">
              {cartTotalQuantity}
            </p>
          )}
          <ShoppingCartIcon className="w-6 h-6" />
          <p>Cart</p>
        </NavLink>
        {localStorage.getItem("userDetails") && (
          <Button
            onClick={handleLogout}
            variant="link"
            className="nav-link gap-1 text-black"
          >
            <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
            <span>Logout</span>
          </Button>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  setSearchFlag: PropTypes.bool,
  setSearchedProducts: Array.of(productPropTypes),
};

export default Header;
