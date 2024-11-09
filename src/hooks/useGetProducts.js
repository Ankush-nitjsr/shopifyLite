import { useEffect, useState, useMemo } from "react";

export const useGetProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    skip: 0,
    limit: 30,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("products: ", result.products);

        // Set products data and pagination details
        setData(result.products);

        setPagination({
          total: result.total,
          skip: result.skip,
          limit: result.limit,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Memoize the data to prevent re-renders unless data changes
  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, loading, error, pagination };
};
