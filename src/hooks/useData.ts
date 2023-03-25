import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig, // *optional
  dependecies?: any[] // *optional
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      console.log("usedata🛑", config);
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...config,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    dependecies ? [...dependecies] : []
  );

  return { data, error, isLoading };
};

export default useData;
