import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    error,
    fetchedData,
    setError,
    setFetchedData,
  };
}
