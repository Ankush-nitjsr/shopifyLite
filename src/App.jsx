import "./App.css";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PrivateRoutes from "./components/PrivateRoutes";
import LogoutPage from "./pages/LogoutPage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <LoginPage /> : <LogoutPage />}
          />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
