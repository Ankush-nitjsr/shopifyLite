import PropTypes from "prop-types";
import { productPropTypes } from "../../lib/productPropTypes";
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export const PriceFilter = ({ productsData }) => {
  const { products, setProducts, setFilter } = useContext(ProductContext);
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
      setProducts(filteredData);
    } else {
      setProducts(productsData);
    }
  };

  const clearFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setFilter("");
    setProducts(productsData);
  };

  return (
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
  );
};

PriceFilter.propTypes = {
  productsData: PropTypes.arrayOf(productPropTypes),
};
