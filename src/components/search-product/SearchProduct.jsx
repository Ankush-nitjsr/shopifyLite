import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../ui/buttons/Button";

export const SearchProduct = ({
  allProducts,
  setSearchFlag,
  setSearchedProducts,
}) => {
  const [searchName, setSearchName] = useState("");

  const findProducts = () => {
    const filteredProducts = allProducts.filter((product) => {
      const lowerCaseSearchName = searchName.toLowerCase();
      return product.title.toLowerCase().includes(lowerCaseSearchName);
    });
    if (filteredProducts.length === 0) {
      setSearchName("");
      setSearchedProducts(allProducts);
      alert(`Product with name: ${searchName} not found`);
    } else {
      setSearchedProducts(filteredProducts);
      console.log(`searching by ${searchName}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchFlag(true);
    findProducts();
  };

  return (
    <form
      className="w-[60%] m-auto flex items-center justify-center space-x-4 p-3 bg-white shadow-md rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search product by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <Button variant="outline" type="submit" className="flex-shrink-0">
        Search
      </Button>
    </form>
  );
};

// Defining PropTypes
SearchProduct.propTypes = {
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSearchFlag: PropTypes.func.isRequired,
  setSearchedProducts: PropTypes.func.isRequired,
};
