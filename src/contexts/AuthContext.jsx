import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("token")
  );
  const [userDetails, setUserDetails] = useState(
    () => JSON.parse(localStorage.getItem("userDetails")) || {}
  );

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("token", isAuthenticated);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");
    }
  }, [isAuthenticated, userDetails]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      userDetails,
      setUserDetails,
    }),
    [isAuthenticated, userDetails]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
