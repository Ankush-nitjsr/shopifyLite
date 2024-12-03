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
import PropTypes from "prop-types";
import { useGetUser } from "../../hooks/useGetUser";

const Header = ({ setSearchFlag, setSearchedProducts }) => {
  const { data } = useGetProducts();
  const { cartTotalQuantity } = useContext(ProductContext);
  const [isScrolling, setIsScrolling] = useState(false);
  const { userSession, setIsAuthenticated, setUser } = useContext(AuthContext);

  // Fetch user data after login based on userId
  const { userData } = useGetUser(userSession.id);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // execute logout function
    setIsAuthenticated(""); // Clear authentication
    navigate("/"); // navigate to login page
  };

  // reload the current webpage
  const resetToDefault = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (userData) {
      // Once userData is fetched, set it in the AuthContext
      setUser(userData);
    }
  }, [userData, setUser]);

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
        <NavLink
          to="/home"
          onClick={resetToDefault}
          className="flex items-center"
        >
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
          <div className="flex flex-col">
            {localStorage.getItem("userSession") && userSession.firstName ? (
              <>
                <span className="text-2xs">{`Hello, ${userSession.firstName}`}</span>
                <span className="text-sm font-medium">Account & Lists</span>
              </>
            ) : (
              <>
                <span className="text-2xs">Hello, log in</span>
                <span className="text-sm font-medium">Account & Lists</span>
              </>
            )}
          </div>
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
        {localStorage.getItem("userSession") && (
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
  setSearchFlag: PropTypes.func,
  setSearchedProducts: PropTypes.func,
};

export default Header;
