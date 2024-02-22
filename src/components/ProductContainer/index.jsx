import { useEffect, useState } from "react";
import Product from "../Product";
import "./styles.css";

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

  // useEffect to reapply the filter when minPrice or maxPrice changes
  useEffect(() => {
    applyFilter();
  }, [minPrice, maxPrice, products]);

  return (
    <>
      <div className="filter-section">
        <div>
          <label>Min Price:</label>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Enter minimum price"
          />
        </div>
        <div>
          <label>Max Price:</label>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter maximum price"
          />
        </div>
        <div>
          <button onClick={applyFilter}>Apply Filter</button>
        </div>
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
            category={product.category}
            thumbnail={product.thumbnail}
            images={product.thumbnail} // need to change to image
          />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
