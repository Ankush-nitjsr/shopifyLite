import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductsContainer from "../../components/products-container/ProductsContainer";
import Header from "../../components/Header/Header";
import { ProductContext } from "../../contexts/ProductContext";
import { useGetProducts } from "../../hooks/useGetProducts";

const LandingPage = () => {
  const { data, loading, error } = useGetProducts();
  const { products, setProducts } = useContext(ProductContext);
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  // Update products only when `data` changes
  useEffect(() => {
    if (data.length > 0) {
      setProducts(data);
    }
  }, [data, setProducts]);

  // Memoize the products to display to avoid unnecessary recalculations
  const productsToDisplay = useMemo(() => {
    return searchFlag
      ? searchedProducts
      : products.length > 0
      ? products
      : data;
  }, [searchFlag, searchedProducts, products, data]);

  // Error message if the data fetch fails.
  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <>
      <Header
        setSearchFlag={setSearchFlag}
        setSearchedProducts={setSearchedProducts}
      />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16rem",
          }}
        >
          <h1 className="text-3xl">Loading...</h1>
        </div>
      ) : (
        <div className="w-full bg-gray-200 px-2 py-4 min-h-screen">
          {productsToDisplay.length > 0 ? (
            <ProductsContainer productsData={productsToDisplay} />
          ) : (
            <div className="h-40 mx-auto mt-4 w-[83%] flex justify-center items-center bg-white p-4 shadow-lg rounded-lg text-gray-500 text-xl">
              No products found.
            </div>
          )}
        </div>
      )}
    </>
  );
};

// Export LandingPage component
// Avoid Unnecessary Re-renders: The LandingPage component is wrapped in React.memo
// to prevent re-renders when its props or state haven't changed.
export default React.memo(LandingPage);
