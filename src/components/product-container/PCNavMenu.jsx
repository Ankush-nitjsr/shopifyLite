import { Separator } from "../../ui/separator";
import { CheckboxField } from "../../ui/CheckboxField";
import capitalizeFirstLetter from "../../lib/capitalizeFirstLetter";
import Button from "../../ui/buttons/Button";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useFilterProducts } from "../../hooks/useFilterProducts";
import { discounts, priceRanges, ratings } from "./constants";

export const PCNavMenu = () => {
  // Get all products
  const { data } = useGetProducts();

  // Use context to filter products
  const { setProducts, categoryFilter, setCategoryFilter, setPriceFilter } =
    useContext(ProductContext);

  // Get filtered products
  const newFilteredProducts = useFilterProducts(data);

  // Make sure data exists before using it
  const categories = data
    ? [...new Set(data.map((product) => product.category))]
    : [];

  useEffect(() => {
    // Avoid setting the same products repeatedly
    if (newFilteredProducts?.length) {
      setProducts(newFilteredProducts);
    }
  }, [categoryFilter, newFilteredProducts, setProducts]);

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handlePriceClick = (label) => {
    const selectedRange = priceRanges.find((range) => range.label === label);
    if (selectedRange) {
      setPriceFilter({
        startPrice: selectedRange.startPrice,
        endPrice: selectedRange.endPrice,
      });
    } else {
      setPriceFilter({});
    }
  };

  return (
    <div className="py-6 px-6 w-[16%] bg-white shadow-lg rounded-lg text-black max-h-fit">
      <h1 className="text-xl font-semibold mb-4">Filters</h1>
      <Separator className="bg-gray-300 mb-4" />

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Category</span>
        </div>
        <ul className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Button
                onClick={() => handleCategoryClick(category)}
                variant="outline"
                className="cursor-pointer"
                key={category}
              >
                <li className="text-base hover:text-blue-500 transition duration-200">
                  {capitalizeFirstLetter(category)}
                </li>
              </Button>
            ))
          ) : (
            <li>No categories available</li>
          )}
        </ul>
      </div>

      <Separator className="bg-gray-300 mb-6" />

      {/* Price Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Price</span>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          {priceRanges.map((range) => (
            <Button
              key={range.label}
              onClick={() => handlePriceClick(range.label)}
              variant="link"
              size="lg"
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-300 mb-6" />

      {/* Discount Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Discount</span>
        </div>
        <div className="space-y-3">
          {discounts.map((discount) => (
            <CheckboxField key={discount.label} text={discount.label} />
          ))}
        </div>
      </div>

      <Separator className="bg-gray-300 mb-6" />

      {/* Product Rating Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Product Rating</span>
        </div>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <CheckboxField key={rating.label} text={rating.label} />
          ))}
        </div>
      </div>
    </div>
  );
};
