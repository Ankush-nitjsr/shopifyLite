import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import "./styles.css";
import { PCNavMenu } from "./PCNavMenu";
import { ProductContext } from "../../contexts/ProductContext";
import { productPropTypes } from "../../lib/productPropTypes";
import { PriceFilter } from "./PriceFilter";

const ProductContainer = ({ productsData }) => {
  const { products, setProducts } = useContext(ProductContext);
  console.log("Products @ PC: ", products);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData, setProducts]);

  return (
    <div className="flex W-full justify-between px-7 py-4 bg-gray-200">
      {/* side filter component */}
      <PCNavMenu />

      {/* Product display section */}
      <div className="w-[83%] bg-white p-4 shadow-lg rounded-lg text-black">
        <PriceFilter productsData={productsData} />
        <div className="product-container">
          {Array.isArray(products) ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProductContainer.propTypes = {
  productsData: PropTypes.arrayOf(productPropTypes),
};

export default ProductContainer;
