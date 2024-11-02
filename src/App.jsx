import LoginPage from "./pages/LoginPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PrivateRoutes from "./components/PrivateRoutes";
import AccountPage from "./pages/AccountPage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductPage } from "./components/product-page/ProductPage";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <LoginPage /> : <HomePage />}
          />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:pid" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
