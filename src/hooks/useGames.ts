import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGame {
  count: number;
  results: Game[];
}

//
const useGames = (selectedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    // call the games api
    apiClient
      .get<FetchGame>("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id },
      })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre]);

  return { games, error, isLoading };
};

export default useGames;
