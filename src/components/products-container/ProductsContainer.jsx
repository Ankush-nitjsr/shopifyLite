import PropTypes from "prop-types";
import React, { useContext, useEffect, useMemo, Suspense } from "react";
import "./styles.css";
import { ProductContext } from "../../contexts/ProductContext";
import { productPropTypes } from "../../lib/productPropTypes";

// Lazy load components
const ProductCard = React.lazy(() => import("../product-card/ProductCard"));
const PCNavMenu = React.lazy(() => import("./PCNavMenu"));
const PriceFilter = React.lazy(() => import("./PriceFilter"));

const ProductContainer = ({ productsData }) => {
  const { setProducts } = useContext(ProductContext);

  // Update products only when `productsData` changes
  useEffect(() => {
    if (Array.isArray(productsData)) {
      setProducts(productsData);
    }
  }, [productsData, setProducts]);

  // Memoize the product list to avoid unnecessary re-renders
  const productList = useMemo(() => {
    return Array.isArray(productsData) ? (
      productsData.map((product) => (
        <Suspense key={product.id} fallback={<div>Loading Product...</div>}>
          <ProductCard product={product} />
        </Suspense>
      ))
    ) : (
      <p>No products available</p>
    );
  }, [productsData]);

  return (
    <div className="flex w-full justify-between px-7 bg-gray-200">
      {/* Side filter component */}
      <Suspense fallback={<div>Loading Filters...</div>}>
        <PCNavMenu />
      </Suspense>

      {/* Product display section */}
      <div className="w-[83%] bg-white p-4 shadow-lg rounded-lg text-black">
        <Suspense fallback={<div>Loading Price Filter...</div>}>
          <PriceFilter productsData={productsData} />
        </Suspense>
        <div className="product-container">{productList}</div>
      </div>
    </div>
  );
};

ProductContainer.propTypes = {
  productsData: PropTypes.arrayOf(productPropTypes),
};

// Export ProductContainer component
// Avoid Unnecessary Re-renders: The ProductContainer component is wrapped in React.memo
// to prevent re-renders when its props or state haven't changed.
export default React.memo(ProductContainer);
