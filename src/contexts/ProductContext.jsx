import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState({});
  const [discountFilter, setDiscountFilter] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [myCartData, setMyCartData] = useState(
    () => JSON.parse(localStorage.getItem("myCartData")) || []
  );
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // Update cart quantity whenever myCartData changes
  useEffect(() => {
    const totalQuantity = myCartData.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartTotalQuantity(totalQuantity);
  }, [myCartData]);

  // Memoize value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      products,
      setProducts,
      categoryFilter,
      setCategoryFilter,
      priceFilter,
      setPriceFilter,
      discountFilter,
      setDiscountFilter,
      ratingFilter,
      setRatingFilter,
      myCartData,
      setMyCartData,
      cartTotalQuantity,
      setCartTotalQuantity,
    }),
    [
      products,
      categoryFilter,
      priceFilter,
      discountFilter,
      ratingFilter,
      myCartData,
      cartTotalQuantity,
    ]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
