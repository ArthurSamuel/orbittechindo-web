import Http from "../../../core/http/Http";
import { HttpBaseResponse } from "../../../core/http/Response.type";
import { Model_Movie } from "./api.type";

export const getPopularMovies = async () => {
  const results = await Http.get<HttpBaseResponse<Model_Movie[]>>({
    url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  });
  return results;
};

export const getSearchMovie = async ({
  query,
  category,
}: {
  query?: string;
  category: "tv" | "movie";
}) => {
  const results = await Http.get<HttpBaseResponse<Model_Movie[]>>({
    url: `/search/${category}`,
    params: {
      query,
    },
  });
  return results;
};

export const getDetailMovie = async ({ movie_id }: { movie_id: string }) => {
  const results = await Http.get({
    url: `/movie/${movie_id}`,
  });
  return results;
};

export const getCreditMovie = async ({ movie_id }: { movie_id: string }) => {
  const results = await Http.get({
    url: `/movie/${movie_id}/credits`,
  });
  return results;
};
