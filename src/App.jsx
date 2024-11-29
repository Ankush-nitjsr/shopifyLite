import LoginPage from "./pages/LoginPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PrivateRoutes from "./components/PrivateRoutes";
import AccountPage from "./pages/AccountPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductPage } from "./components/product-page/ProductPage";
import { Checkout } from "./components/checkout/Checkout";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:pid" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
