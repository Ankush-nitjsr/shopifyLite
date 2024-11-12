import { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";

export const useFilterProducts = (data) => {
  const { categoryFilter, priceFilter, discountFilter, ratingFilter } =
    useContext(ProductContext);

  const newFilteredProducts = useMemo(() => {
    if (!data.length) return []; // Prevent filtering on empty data

    console.log("Products array: ", data);
    console.log("Category Filter:", categoryFilter);
    console.log("Price Filter:", priceFilter);
    console.log("Discount Filter:", discountFilter);
    console.log("Rating Filter:", ratingFilter);

    return data.filter((product) => {
      let matchesCategory = true;
      let matchesPrice = true;
      let matchesDiscount = true;
      let matchesRating = true;

      // Log the product details to debug
      console.log("Filtering product:", product);

      // Category filter logic
      if (categoryFilter) {
        const productCategory = product?.category?.trim().toLowerCase();
        const filterCategory = categoryFilter.trim().toLowerCase();
        console.log(
          `Comparing product category: ${productCategory} with ${filterCategory}`
        );

        matchesCategory = productCategory === filterCategory;
      }

      // Price filter logic
      if (
        priceFilter?.startPrice !== undefined &&
        priceFilter?.endPrice !== undefined
      ) {
        console.log(
          `Comparing price: ${product.price} with range: ${priceFilter.startPrice} - ${priceFilter.endPrice}`
        );
        matchesPrice =
          product?.price >= priceFilter.startPrice &&
          product?.price <= priceFilter.endPrice;
      }

      // Discount filter logic
      if (discountFilter !== undefined && discountFilter !== null) {
        console.log(
          `Comparing discount: ${product.discountPercentage} with filter: ${discountFilter}`
        );
        matchesDiscount = product?.discountPercentage >= discountFilter;
      }

      // Rating filter logic
      if (ratingFilter !== undefined && ratingFilter !== null) {
        console.log(
          `Comparing rating: ${product.rating} with filter: ${ratingFilter}`
        );
        matchesRating = product?.rating >= ratingFilter;
      }

      // Log the result of this product filtering
      console.log(
        `Product matches? Category: ${matchesCategory}, Price: ${matchesPrice}, Discount: ${matchesDiscount}, Rating: ${matchesRating}`
      );

      return (
        matchesCategory && matchesPrice && matchesDiscount && matchesRating
      );
    });
  }, [data, categoryFilter, priceFilter, discountFilter, ratingFilter]);

  console.log("Filtered products:", newFilteredProducts);

  return Array.isArray(newFilteredProducts) ? newFilteredProducts : [];
};
