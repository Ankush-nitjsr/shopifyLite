import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./styles.css";
import PropTypes from "prop-types";
import { productPropTypes } from "../../lib/productPropTypes";

const ProductContainer = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Apply the filter based on the provided price range
  const applyFilter = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      const filteredData = products.filter(
        (product) => product.price >= min && product.price <= max
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  };

  const clearFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setFilteredProducts(products);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [setFilteredProducts, products]);

  return (
    <>
      <div className="filter-section">
        <div>
          <label>Min Price:</label>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Enter minimum"
          />
        </div>
        <div>
          <label>Max Price:</label>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter maximum"
          />
        </div>
        <div>
          <button onClick={applyFilter}>Apply Filter</button>
        </div>
        <div>
          <button onClick={clearFilter}>Clear Filter</button>
        </div>
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(productPropTypes),
};

export default ProductContainer;
