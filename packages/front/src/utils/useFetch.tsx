import { useState, useEffect } from "react";
import { fetchApi } from "./fetch";

export default function useFetch({ url }: { url: string }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi({ url, method: "GET" });

        setResponse(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, isLoading };
}
