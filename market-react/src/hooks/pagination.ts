// falta test
import { useState, useEffect } from "react";
  
export const usePagination = (initialLimit: number, initialPage: number) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [limit, setLimit] = useState(initialLimit); 
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const fetchData = async () => {
      
      setLoading(true);
      setError(null);
      try {
        const skip = (page - 1) * limit; 
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,category,description,thumbnail`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, page]); 

  return { products, loading, error, limit, setLimit, page, setPage };
};
