import { createContext, useEffect, useState } from "react";

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

  const [cartTotalAmount, setCartTotalAmount] = useState(
    JSON.parse(localStorage.getItem("totalCartValue")) || 0
  );

  const [cartTotalQuantity, setCartTotalQuantity] = useState(
    JSON.parse(localStorage.getItem("totalCartQuantity")) || 0
  );

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
