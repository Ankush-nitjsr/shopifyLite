import { NavLink } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { cartTotalAmount } = useContext(AuthContext);
  const { cartTotalQuantity } = useContext(AuthContext);

  return (
    <header>
      <div className="gradient">Header</div>
      <nav>
        <NavLink to="/">
          {!localStorage.getItem("userDetails") ? "Login" : "Profile Details"}
        </NavLink>
        <NavLink to="/home">Home Page</NavLink>
        <NavLink to="/cart">
          Cart (
          {`${cartTotalQuantity} items - $${
            Math.round(cartTotalAmount * 100) / 100
          }`}
          )
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
