import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // set state for all products
  const [products, setProducts] = useState([]);
  // set state for filters
  const [filter, setFilter] = useState("");
  // set state for username and password
  const [user, setUser] = useState({ username: "", password: "" });

  // set state for user details
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {}
  );

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );

  const [myCartData, setMyCartData] = useState(
    JSON.parse(localStorage.getItem("myCartData")) || []
  );

  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // Recalculate total quantity and amount when cart data changes
  useEffect(() => {
    const totalQuantity = myCartData.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartTotalQuantity(totalQuantity);
  }, [myCartData]);

  return (
    <AuthContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        user,
        setUser,
        userDetails,
        setUserDetails,
        isAuthenticated,
        setIsAuthenticated,
        myCartData,
        setMyCartData,
        cartTotalQuantity,
        setCartTotalQuantity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
