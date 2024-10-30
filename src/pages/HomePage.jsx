import { useEffect, useState } from "react";
import ProductContainer from "../components/product-container/ProductContainer";
import Header from "../components/Header/Header";

const HomePage = () => {
  const PRODUCTS_URL = "https://dummyjson.com/products";

  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const findProducts = () => {
    // Perform search logic and update searchData
    const filteredProducts = allProducts.filter((product) => {
      const lowerCaseSearchName = searchName.toLowerCase();
      return product.title.toLowerCase().includes(lowerCaseSearchName);
    });
    if (filteredProducts.length == 0) {
      setSearchName("");
      return alert(`Product with name: ${searchName} not found`);
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

  // useEffect to load products when component mounts
  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);
        const data = await response.json();
        setAllProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };

    loadAllProducts();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "16rem",
          }}
        >
          <h1 className="text-3xl">Loading...</h1>
        </div>
      ) : (
        <div className="px-12">
          <form className="search-section" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search product by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          {(!searchFlag ? allProducts : searchedProducts).length > 0 ? (
            <ProductContainer
              products={!searchFlag ? allProducts : searchedProducts || []}
            />
          ) : (
            <div>No products found.</div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
