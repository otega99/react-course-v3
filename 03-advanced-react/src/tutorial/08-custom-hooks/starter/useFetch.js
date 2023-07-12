import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isError, isLoading, data };
};

export default useFetch;
