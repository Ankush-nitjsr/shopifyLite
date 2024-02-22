import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import Header from "../components/Header";

function LoginPage() {
  // authentication handling of user with context hook
  const { setIsAuthenticated } = useContext(AuthContext);
  // Get user state with context hook
  const { user } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  // navigate to desired location
  const navigate = useNavigate();

  // API URL for user login
  const URL_FOR_LOGIN = "https://dummyjson.com/auth/login";

  // save input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // function for handling user login
  const handleOnLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(URL_FOR_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        console.log(user.username, user.password);
        throw new Error("Incorrect Username/Password");
      }
      const result = await response.json();
      localStorage.setItem("userDetails", JSON.stringify(result));
      const token = result.token;
      // save token to local storage
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      // display success message on Login
      toast.success("LogIn Successful!");
      console.log("Login Successful", user);

      // switch to HomePage on successful Login
      navigate("/home");
    } catch (error) {
      console.error("Error in login", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>Login Page</h1>
        <form onSubmit={handleOnLogin} className="login-form">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}

export default LoginPage;
