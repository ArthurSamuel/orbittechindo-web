import { useQuery } from "@tanstack/react-query";
import {
  getCreditMovie,
  getDetailMovie,
  getPopularMovies,
  getSearchMovie,
} from "./service";

export const useGetPopularMovie = () => {
  return useQuery({
    queryKey: ["popularMovie"],
    queryFn: () => getPopularMovies(),
  });
};

export const useGetSearchMovie = ({
  query,
  category,
  startDate,
  endDate,
}: {
  query?: string;
  category: "tv" | "movie";
  startDate?: string;
  endDate?: string;
}) => {
  return useQuery({
    enabled: query !== undefined,
    queryKey: [query, category, startDate, endDate],
    queryFn: async () => {
      let results = await getSearchMovie({ query, category });
      if (startDate) {
        const temp = { ...results };
        temp.data.results = temp.data.results.filter(
          (item) => item.release_date >= startDate
        );
        results = temp;
      }
      if (endDate) {
        const temp = { ...results };
        temp.data.results = temp.data.results.filter(
          (item) => item.release_date <= endDate
        );
        results = temp;
      }
      return results;
    },
  });
};

export const useGetDetailMovie = ({ movie_id }: { movie_id: string }) => {
  return useQuery({
    queryKey: ["movieDetail", movie_id],
    queryFn: () => getDetailMovie({ movie_id }),
  });
};

export const useGetCreditMovie = ({ movie_id }: { movie_id: string }) => {
  return useQuery({
    enabled: movie_id !== undefined,
    queryKey: ["movieDetailCredit", movie_id],
    queryFn: () => getCreditMovie({ movie_id }),
  });
};
