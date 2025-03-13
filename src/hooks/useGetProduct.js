import { useEffect, useState } from "react";
import { getProduct } from "../apis/product-apis";

export const useGetProduct = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); // For cleanup

    const fetchProduct = async () => {
      if (!id) return; // Skip if id is not provided

      setLoading(true);
      setError(null);

      try {
        const response = await getProduct(id); // Use the getProduct function
        setData(response.data);
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.error("Error fetching product:", error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    // Cleanup function to abort the request if the component unmounts
    return () => {
      abortController.abort();
    };
  }, [id]);

  return { data, loading, error };
};
