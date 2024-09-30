import { useEffect, useState } from "react";

export function useFetch(
  url: string,
  opts: RequestInit | null,
  deps?: React.DependencyList
) {
  // Fetch data when component mounts
  const [data, setData] = useState();

  // Fetch data when component mounts
  useEffect(() => {
    (async () => {
      try {
        // Fetch the data
        const response = await fetch(url, opts ?? {});

        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();

        // Set the data
        setData(jsonData);
      } catch (error) {
        throw new Error("Failed to fetch data: " + error);
      }
    })();
  }, deps);

  // Return the fetched data and a function to refetch the data
  return { data, setData };
}
