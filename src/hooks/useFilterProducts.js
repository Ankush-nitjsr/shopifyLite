import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useFilterProducts = () => {
  const { products, filter } = useContext(ProductContext);

  const newFilteredProducts = products.filter(
    (product) => product.category === filter
  );

  return { newFilteredProducts };
};
