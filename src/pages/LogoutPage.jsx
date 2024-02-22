import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import Header from "../components/Header";

const LogoutPage = () => {
  // Get user details with context hook
  const { userDetails } = useContext(AuthContext);
  const { setUserDetails } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    // delete user from local storage
    localStorage.removeItem("userDetails");
    // delete cart
    localStorage.removeItem("myCartData");
    // delete token saved in local storage
    localStorage.removeItem("token");
    // set isAuthenticated to false
    setIsAuthenticated("");
    // display success message on Logout
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
  }, []);

  return (
    <>
      <Header />
      <div className="Logout-page">
        <h1>{`Hello, ${userDetails.firstName} ${userDetails.lastName}!`}</h1>
        <h2 style={{ color: "red" }}>
          You are already Logged In with below details
        </h2>
        <table className="userDetails-table">
          <thead>
            <tr>
              <th scope="col">Field</th>
              <th scope="col">Your detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Username</th>
              <td>{userDetails.username}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{userDetails.email}</td>
            </tr>
            <tr>
              <th scope="row">First name</th>
              <td>{userDetails.firstName}</td>
            </tr>
            <tr>
              <th scope="row">Last name</th>
              <td>{userDetails.lastName}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td>{userDetails.gender}</td>
            </tr>
            <tr>
              <th scope="row">Image</th>
              <td>
                <img src={userDetails.image} />
              </td>
            </tr>
          </tbody>
        </table>
        <p>Click on below button to LogOut</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default LogoutPage;
