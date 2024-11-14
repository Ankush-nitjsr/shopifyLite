import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("token")
  );
  const [userSession, setUserSession] = useState(
    () => JSON.parse(localStorage.getItem("userSession")) || {}
  );

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("token", isAuthenticated);
      localStorage.setItem("userSession", JSON.stringify(userSession));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userSession");
    }
  }, [isAuthenticated, userSession]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      userSession,
      setUserSession,
    }),
    [isAuthenticated, userSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
