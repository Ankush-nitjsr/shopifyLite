import PropTypes from "prop-types";
import { productPropTypes } from "../../lib/productPropTypes";
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Button from "../../ui/buttons/Button";

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
    <div className="filter-section m-1 p-1">
      <div>
        <label htmlFor="min-price">Min Price:</label>
        <input
          id="min-price"
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Enter minimum"
        />
      </div>
      <div>
        <label htmlFor="max-price">Max Price:</label>
        <input
          id="max-price"
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Enter maximum"
        />
      </div>
      <div>
        <Button
          variant="outline"
          onClick={applyFilter}
          className="hover:bg-[#ffa500]"
        >
          Apply Filter
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={clearFilter}
          className="hover:bg-[#ffa500]"
        >
          Clear Filter
        </Button>
      </div>
    </div>
  );
};

PriceFilter.propTypes = {
  productsData: PropTypes.arrayOf(productPropTypes),
};
