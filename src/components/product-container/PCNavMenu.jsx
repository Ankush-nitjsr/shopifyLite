import { Separator } from "../../ui/separator";
import { CheckboxField } from "../../ui/CheckboxField";
import capitalizeFirstLetter from "../../lib/capitalizeFirstLetter";
import Button from "../../ui/buttons/Button";
import { useCallback, useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useFilterProducts } from "../../hooks/useFilterProducts";

export const PCNavMenu = () => {
  // Get all products
  const { data } = useGetProducts();

  // Get filtered products
  const { newFilteredProducts } = useFilterProducts();

  // Use context to filter products
  const { setFilter, setProducts } = useContext(ProductContext);

  // Make sure data exists before using it
  const categories = data
    ? [...new Set(data.map((product) => product.category))]
    : [];

  // Use useCallback to memoize the setFilter function for the category buttons
  const handleCategoryClick = useCallback(
    (category) => {
      setFilter(category);
    },
    [setFilter]
  );

  useEffect(() => {
    // Avoid setting the same products repeatedly
    setProducts((prevProducts) => {
      if (
        JSON.stringify(prevProducts) !== JSON.stringify(newFilteredProducts)
      ) {
        return newFilteredProducts;
      }
      return prevProducts;
    });
  }, [newFilteredProducts, setProducts]);

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
          <Button variant="link" size="lg">
            Under $50
          </Button>
          <Button variant="link" size="lg">
            $50 - $100
          </Button>
          <Button variant="link" size="sm">
            $100 - $250
          </Button>
          <Button variant="link" size="sm">
            $250 - $500
          </Button>
          <Button variant="link" size="sm">
            $500 - $1000
          </Button>
          <Button variant="link" size="sm">
            Over $1000
          </Button>
        </div>
      </div>

      <Separator className="bg-gray-300 mb-6" />

      {/* Discount Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Discount</span>
        </div>
        <div className="space-y-3">
          <CheckboxField text={"5% Off or more"} />
          <CheckboxField text={"10% Off or more"} />
          <CheckboxField text={"15% Off or more"} />
          <CheckboxField text={"20% Off or more"} />
        </div>
      </div>

      <Separator className="bg-gray-300 mb-6" />

      {/* Product Rating Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium">Product Rating</span>
        </div>
        <div className="space-y-3">
          <CheckboxField text={"1 ⭐ & above"} />
          <CheckboxField text={"2 ⭐ & above"} />
          <CheckboxField text={"3 ⭐ & above"} />
          <CheckboxField text={"4 ⭐ & above"} />
        </div>
      </div>
    </div>
  );
};
