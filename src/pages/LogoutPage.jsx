import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LogoutPage = () => {
  // Get user with context hook
  const { user } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    console.log(user);
    // delete token saved in local storage
    localStorage.removeItem("token");
    // set isAuthenticated to false
    setIsAuthenticated("");
  };
  return (
    <div className="Logout-page">
      <h1>{`Hey, ${user.firstName} ${user.lastName}`}</h1>
      <h2 style={{ color: "red" }}>User is already Logged In</h2>
      <p>{`Bearer Token: ${localStorage.getItem("token")}`}</p>
      <p>Click on below button to LogOut</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
