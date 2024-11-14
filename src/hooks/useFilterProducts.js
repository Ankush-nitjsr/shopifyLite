import { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useFilterProducts = (data) => {
  const { categoryFilter, priceFilter, discountFilter, ratingFilter } =
    useContext(ProductContext);

  const newFilteredProducts = useMemo(() => {
    if (!data.length) return []; // Prevent filtering on empty data

    return data.filter((product) => {
      let matchesCategory = true;
      let matchesPrice = true;
      let matchesDiscount = true;
      let matchesRating = true;

      // Category filter logic
      if (categoryFilter) {
        const productCategory = product?.category?.trim().toLowerCase();
        const filterCategory = categoryFilter.trim().toLowerCase();

        matchesCategory = productCategory === filterCategory;
      }

      // Price filter logic
      if (
        priceFilter?.startPrice !== undefined &&
        priceFilter?.endPrice !== undefined
      ) {
        matchesPrice =
          product?.price >= priceFilter.startPrice &&
          product?.price <= priceFilter.endPrice;
      }

      // Discount filter logic
      if (discountFilter !== undefined && discountFilter !== 0) {
        matchesDiscount = product?.discountPercentage >= discountFilter;
      }

      // Rating filter logic
      if (ratingFilter !== undefined && ratingFilter !== 0) {
        matchesRating = product?.rating >= ratingFilter;
      }

      return (
        matchesCategory && matchesPrice && matchesDiscount && matchesRating
      );
    });
  }, [data, categoryFilter, priceFilter, discountFilter, ratingFilter]);

  return Array.isArray(newFilteredProducts) ? newFilteredProducts : [];
};
