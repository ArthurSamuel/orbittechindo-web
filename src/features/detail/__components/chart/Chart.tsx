/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { useGetMovieByGenre, useGetMovieCategories } from "../../api/resolver";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const { data: dataRawCategories } = useGetMovieCategories();
  const dataCategories = dataRawCategories?.data;
  const dataCategorieIds = dataCategories?.genres.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const dataRawMovieByGenre = useGetMovieByGenre({
    dataCategories: dataCategorieIds,
  });
  const dataMovieByGenre = dataRawMovieByGenre?.map((item) => item.data);

  return (
    <Box height={500}>
      <Typography variant="h5" fontWeight={"bold"}>
        Movie Stat By Genre
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataMovieByGenre}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  );
}
