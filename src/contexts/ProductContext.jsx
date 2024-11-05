import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [myCartData, setMyCartData] = useState(
    () => JSON.parse(localStorage.getItem("myCartData")) || []
  );
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    const totalQuantity = myCartData.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartTotalQuantity(totalQuantity);
  }, [myCartData]);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      filter,
      setFilter,
      myCartData,
      setMyCartData,
      cartTotalQuantity,
      setCartTotalQuantity,
    }),
    [products, filter, myCartData, cartTotalQuantity]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
