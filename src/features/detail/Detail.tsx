import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useGetCreditMovie, useGetDetailMovie } from "../home/api/resolver";
import { Model_MovieCredit, Model_MovieDetail } from "../home/api/api.type";
import Cast from "./__components/cast/Cast";
import Genres from "./__components/genres/Genres";
import Chart from "./__components/chart/Chart";

export default function Detail() {
  const { id } = useParams();
  const { data: data, isLoading: fetchMovieDetail } = useGetDetailMovie({
    movie_id: id || "0",
  });
  const dataDetailMovie: Model_MovieDetail = data?.data;
  const { data: dataRawCreditMovie } = useGetCreditMovie({
    movie_id: id || "0",
  });
  const dataCreditMovie: Model_MovieCredit = dataRawCreditMovie?.data;
  const src = `https://image.tmdb.org/t/p/original/${dataDetailMovie?.poster_path}`;

  if (fetchMovieDetail) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} bgcolor={"#dedede"}>
          <Box width={"100%"} height={"100vh"}>
            <img style={{ height: "100%", width: "100%" }} src={src} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} overflow={"scroll"} maxHeight={"100vh"}>
          <Box p={1}>
            <Typography variant="h4">{dataDetailMovie.title}</Typography>
            <Box mt={4}>
              <Typography fontWeight={"bold"} variant="h5">
                Release Date
              </Typography>
              <Typography mt={1} variant="h5">
                {dataDetailMovie.release_date}
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography fontWeight={"bold"} variant="h5">
                Plot
              </Typography>
              <Typography variant="body2" mt={1}>
                {dataDetailMovie.overview}
              </Typography>
            </Box>
            <Box mt={4}>
              <Genres data={dataDetailMovie} />
            </Box>
            <Box mt={4}>
              <Typography fontWeight={"bold"} variant="h5">
                Rating
              </Typography>
              <Typography mt={1} variant="h4">
                {dataDetailMovie.vote_average.toFixed(1)} / 10
              </Typography>
            </Box>
            <Box mt={4}>
              <Cast data={dataCreditMovie?.cast} />
            </Box>
            <Box mt={4}>
              <Chart />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
