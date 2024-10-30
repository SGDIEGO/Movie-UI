import { useEffect, useState } from "react";

export function useFetch<T>(
  url: string,
  opts?: RequestInit | null,
  deps?: React.DependencyList
) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, opts ?? {});

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        throw new Error("Failed to fetch data: " + error);
      }
    })();
  }, deps);

  return { data, setData };
}
