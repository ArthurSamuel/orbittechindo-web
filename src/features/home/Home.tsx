import { Box, Grid } from "@mui/material";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import { useGetPopularMovie, useGetSearchMovie } from "./api/resolver";
import Input, { IOptions } from "../../components/input/Input";
import { useState } from "react";
import List from "./__components/list/List";
import { debounce } from "../../utils/Helper";

export default function Home() {
  const [query, setQuery] = useState<string>("The");
  const dataOptionCategoriesMovie = [
    {
      text: "Movie",
      value: "movie",
    },
    {
      text: "Series",
      value: "tv",
    },
  ];
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [seletedCategory, setSelectedCategory] = useState<IOptions>(
    dataOptionCategoriesMovie[0]
  );
  const { data: dataRawSearchMovie, isLoading: fetchingSearchMovie } =
    useGetSearchMovie({
      query,
      category: seletedCategory?.value,
      startDate,
      endDate,
    });
  const dataSearchMovie = dataRawSearchMovie?.data.results;
  const { data: dataRawPopularMovie } = useGetPopularMovie();
  const dataPopularMovie = dataRawPopularMovie?.data.results;

  const handleOnChange = debounce((value: string) => {
    setQuery(value);
  }, 450);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <CarouselComponent data={dataPopularMovie} />
        </Grid>
        <Grid item xs={12} p={2} display={"flex"} gap={1} mt={6}>
          <Box flexBasis={"50%"}>
            <Input.Text label="Title" onChange={(e) => handleOnChange(e)} />
          </Box>
          <Box flexBasis={"30%"}>
            <Input.Select
              label="Category"
              options={dataOptionCategoriesMovie || []}
              value={seletedCategory}
              onChange={(e) => setSelectedCategory(e)}
            />
          </Box>
          <Box flexBasis={"20%"}>
            <Input.Date label="Start Date" onChange={(e) => setStartDate(e)} />
          </Box>
          <Box flexBasis={"20%"}>
            <Input.Date label="End Date" onChange={(e) => setEndDate(e)} />
          </Box>
        </Grid>
        <Grid padding={2}>
          <List data={dataSearchMovie} isLoding={fetchingSearchMovie} />
        </Grid>
      </Grid>
    </Box>
  );
}
