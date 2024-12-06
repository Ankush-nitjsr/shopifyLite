import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../ui/buttons/Button";
import { SearchIcon } from "lucide-react";

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
      className="min-w-[50%] sm:w-[50%] md:w-full flex-1 mx-auto flex items-center justify-evenly p-1 bg-gray-200 border border-gray-300 rounded-3xl focus:border-[#ffa500] hover:border-[#ffa500]"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search product by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="flex-grow p-1 focus:outline-none bg-gray-200 h-3 sm:h-4 md:h-6 m-0 sm:m-1 md:m-2"
      />
      <Button
        variant="outline"
        type="submit"
        className="p-2.5 rounded-full bg-[#ffa500] hover:bg-[#f4b84a]"
      >
        <SearchIcon className="w-5 h-5 text-white" />
      </Button>
    </form>
  );
};

// Defining PropTypes
SearchProduct.propTypes = {
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  setSearchFlag: PropTypes.func,
  setSearchedProducts: PropTypes.func,
};
