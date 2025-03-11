import { Box, Typography } from "@mui/material";
import { Model_MovieDetail } from "../../../home/api/api.type";

interface IGenres {
  data: Model_MovieDetail;
}

export default function Genres({ data }: IGenres) {
  return (
    <Box>
      <Typography fontWeight={"bold"} variant="h5">
        Genres
      </Typography>
      <Box display={"flex"} gap={1} mt={1}>
        {data.genres.map((item, index) => {
          return (
            <Box
              key={index}
              borderRadius={"50px"}
              width={"100%"}
              p={0.7}
              textAlign={"center"}
              border={"1px solid #e2d9d9"}
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
            >
              <Typography fontWeight={"bold"}>{item.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
