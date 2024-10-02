import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
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

  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // Recalculate total quantity and amount when cart data changes
  useEffect(() => {
    const totalQuantity = myCartData.reduce(
      (acc, item) => acc + item.productQuantity,
      0
    );
    const totalAmount = myCartData.reduce(
      (acc, item) => acc + item.productAmount,
      0
    );
    setCartTotalQuantity(totalQuantity);
    setCartTotalAmount(totalAmount);
  }, [myCartData]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userDetails,
        setUserDetails,
        isAuthenticated,
        setIsAuthenticated,
        myCartData,
        setMyCartData,
        cartTotalAmount,
        setCartTotalAmount,
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
