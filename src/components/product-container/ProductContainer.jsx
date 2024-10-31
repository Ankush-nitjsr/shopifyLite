import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./styles.css";
import PropTypes from "prop-types";
import { productPropTypes } from "../../lib/productPropTypes";
import { Separator } from "../../ui/separator";
import { CheckboxField } from "../../ui/CheckboxField";
import capitalizeFirstLetter from "../../lib/capitalizeFirstLetter";
import Button from "../../ui/buttons/Button";

const ProductContainer = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Get all categories
  const categories = [...new Set(products.map((product) => product.category))];

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
    <div className="flex W-full justify-between px-7">
      {/* side filter component */}
      <div className="py-4 space-y-3 w-[15%]">
        <h1 className="text-xl font-semibold px-4">Filters</h1>
        <Separator className="bg-gray-500" />
        <div className="px-4">
          <div className="text-gray-100 flex justify-between">
            <span className="text-lg font-medium">Category</span>
          </div>
          <div className="px-4 py-1 space-y-2">
            {categories.map((category) => (
              <li key={category} className="list-none text-base">
                {capitalizeFirstLetter(category)}
              </li>
            ))}
          </div>
        </div>
        <div className="px-4">
          <div className="text-gray-100 flex justify-between">
            <span className="text-lg font-medium">Price</span>
          </div>
          <div className="py-2 space-y-4 flex flex-col items-start">
            <Button variant="link" size="sm" className="additional-class">
              Under $50
            </Button>
            <Button variant="link" size="sm" className="additional-class">
              $50 - $100
            </Button>
            <Button variant="link" size="sm" className="additional-class">
              $100 - $250
            </Button>
            <Button variant="link" size="sm" className="additional-class">
              $250 - $500
            </Button>
            <Button variant="link" size="sm" className="additional-class">
              $500 - $1000
            </Button>
            <Button variant="link" size="sm" className="additional-class">
              Over $1000
            </Button>
          </div>
        </div>
        <div className="px-4">
          <div className="text-gray-100 flex justify-between">
            <span className="text-lg font-medium">Discount</span>
          </div>
          <div className="py-2 space-y-4">
            <CheckboxField text={"5% Off or more"} />
            <CheckboxField text={"10% Off or more"} />
            <CheckboxField text={"15% Off or more"} />
            <CheckboxField text={"20% Off or more"} />
          </div>
        </div>
        <div className="px-4">
          <div className="text-gray-100 flex justify-between">
            <span className="text-lg font-medium">Product Rating</span>
          </div>
          <div className="py-2 space-y-4">
            <CheckboxField text={"1 ⭐ & above"} />
            <CheckboxField text={"2 ⭐ & above"} />
            <CheckboxField text={"3 ⭐ & above"} />
            <CheckboxField text={"4 ⭐ & above"} />
          </div>
        </div>
      </div>

      {/* Product display section */}
      <div className="w-[83%]">
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
      </div>
    </div>
  );
};

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(productPropTypes),
};

export default ProductContainer;
