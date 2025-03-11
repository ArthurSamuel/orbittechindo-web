import Http from "../../../core/http/Http";

export const getMovieByGenre = async ({
  with_genres,
}: {
  with_genres: string;
}) => {
  const results = await Http.get({
    url: "/discover/movie",
    params: {
      with_genres,
    },
  });
  return results;
};

export const getMovieCategories = async () => {
  const results = await Http.get({
    url: "/genre/movie/list?language=en",
  });
  return results;
};
