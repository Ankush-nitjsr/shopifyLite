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
      <div className="flex md:flex-row justify-center items-center text-3xs md:text-base">
        <label htmlFor="min-price">Min Price:</label>
        <input
          id="min-price"
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Enter minimum"
        />
      </div>
      <div className="flex md:flex-row justify-center items-center text-3xs md:text-base">
        <label htmlFor="max-price">Max Price:</label>
        <input
          id="max-price"
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Enter maximum"
        />
      </div>
      <div className="flex space-x-1 md:space-x-6">
        <div className="filter-btn">
          <Button
            variant="outline"
            onClick={applyFilter}
            className="hover:bg-[#ffa500] w-14 text-[0.35rem] h-6 md:w-24 md:h-10 md:text-sm"
          >
            Apply Filter
          </Button>
        </div>
        <div className="filter-btn">
          <Button
            variant="outline"
            onClick={clearFilter}
            className="hover:bg-[#ffa500] w-14 text-[0.35rem] h-6 md:w-24 md:h-10 md:text-sm"
          >
            Clear Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

PriceFilter.propTypes = {
  productsData: PropTypes.arrayOf(productPropTypes),
};
