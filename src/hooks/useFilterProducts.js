import { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useFilterProducts = (data) => {
  const { categoryFilter } = useContext(ProductContext);

  const newFilteredProducts = useMemo(() => {
    if (!data.length) return []; // Prevent filtering on empty data

    console.log("Products array: ", data);

    return data.filter((product) => {
      let matchesCategory = true;

      // Check for category filter
      if (categoryFilter) {
        const productCategory = product?.category?.trim().toLowerCase(); // Ensure trimmed and lowercase
        const filterCategory = categoryFilter.trim().toLowerCase();

        console.log(
          "Comparing product category: ",
          productCategory,
          " with ",
          filterCategory
        );

        matchesCategory = productCategory === filterCategory;
      }

      return matchesCategory;
    });
  }, [data, categoryFilter]);

  return Array.isArray(newFilteredProducts) ? newFilteredProducts : [];
};
