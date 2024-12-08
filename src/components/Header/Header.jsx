import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "./styles.css";
import Button from "../../ui/buttons/Button";
import {
  ArrowRightStartOnRectangleIcon,
  ShoppingCartIcon,
  UserCircleIcon,
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
    <header className={`${isScrolling ? "scrolled" : ""} `}>
      <nav>
        {/* Logo */}
        <NavLink
          to="/home"
          onClick={resetToDefault}
          className="nav-link flex items-center"
        >
          <ShoppingBagIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#ffa500]" />
          <p className="pt-1">
            <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#ffa500]">
              S
            </span>
            <span className="font-medium text-lg sm:text-xl md:text-2xl">
              hop
            </span>
          </p>
        </NavLink>

        {/* SearchProduct Component */}
        <div className="search-bar">
          <SearchProduct
            allProducts={data}
            setSearchFlag={setSearchFlag}
            setSearchedProducts={setSearchedProducts}
          />
        </div>

        {/* Profile */}
        <NavLink to="/profile" className="nav-link whitespace-nowrap">
          <div>
            {localStorage.getItem("userSession") && userSession.firstName ? (
              <div className="flex justify-center items-center gap-1">
                <UserCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                  {userSession.firstName}
                </span>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-1">
                <UserCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Log in
                </span>
              </div>
            )}
          </div>
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className="nav-link flex justify-center items-center gap-1 relative"
        >
          {cartTotalQuantity > 0 && (
            <p className="cart-quantity text-3xs md:text-2xs w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-md border border-black flex justify-center items-center">
              {cartTotalQuantity}
            </p>
          )}
          <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Cart</p>
        </NavLink>

        {/* Logout */}
        {localStorage.getItem("userSession") && (
          <Button
            onClick={handleLogout}
            variant="link"
            className="nav-link gap-1 text-gray-600"
          >
            <ArrowRightStartOnRectangleIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              Logout
            </span>
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
