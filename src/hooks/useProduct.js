import { getProduct } from "api/products.api";
import { useEffect, useState } from "react";

const useProduct = (id) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setItem(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { item, isLoading, error };
};

export default useProduct;
