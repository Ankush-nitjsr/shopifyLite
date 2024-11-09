import { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useFilterProducts = () => {
  const { products, filter } = useContext(ProductContext);

  // Guard clause to prevent filtering when filter is not a string or products are not ready
  const newFilteredProducts = useMemo(() => {
    console.log("Filter value:", filter);
    console.log("Products:", products);
    if (!filter || typeof filter !== "string") {
      return products; // Return all products if there's no valid filter
    }

    // Filter products based on the filter text being present in product names
    return products.filter(
      (product) => product?.name?.toLowerCase().includes(filter.toLowerCase()) // Ensure safe access and case-insensitive filtering
    );
  }, [products, filter]); // Ensure proper dependencies

  return { newFilteredProducts };
};
