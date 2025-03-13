import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../apis/product-apis";

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
    const abortController = new AbortController(); // For cleanup

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getProducts();

        // Set products data and pagination details
        setData(response.data.products);

        setPagination({
          total: response.data.total,
          skip: response.data.skip,
          limit: response.data.limit,
        });
      } catch (error) {
        if (!abortController.signal.aborted) {
          handleApiError(error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    // Cleanup function to abort the request if the component unmounts
    return () => {
      abortController.abort();
    };
  }, []);

  const handleApiError = (error) => {
    if (error.response) {
      console.error("Server responded with an error:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
  };

  // Memoize the data to prevent re-renders unless data changes
  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, loading, error, pagination };
};
