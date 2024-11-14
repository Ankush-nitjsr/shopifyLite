import { toast } from "react-toastify";

/**
 * function to logout for user
 * set isAuthenticated to empty string (setIsAuthenticated(""))
 * when using logout function
 */
const logout = () => {
  // delete user from local storage
  localStorage.removeItem("userSession");
  // delete cart
  localStorage.removeItem("myCartData");
  // delete token saved in local storage
  localStorage.removeItem("token");
  // display success message on Logout
  toast.success("Logged out successfully");
};

export { logout };
