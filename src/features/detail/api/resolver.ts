/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueries, useQuery } from "@tanstack/react-query";
import { getMovieByGenre, getMovieCategories } from "./service";

export const useGetMovieByGenre = ({
  dataCategories,
}: {
  dataCategories?: [];
}) => {
  return useQueries({
    queries: (dataCategories || []).map((item: any) => ({
      queryKey: ["movieByGenre", item.id],
      queryFn: async () => {
        const res = await getMovieByGenre({ with_genres: item.id });
        return {
          total: res.data.total_results,
          id: item.id,
          name: item.name,
        };
      },
      enabled: !!item,
    })),
  });
};

export const useGetMovieCategories = () => {
  return useQuery({
    queryKey: ["movieCategories"],
    queryFn: () => getMovieCategories(),
  });
};
