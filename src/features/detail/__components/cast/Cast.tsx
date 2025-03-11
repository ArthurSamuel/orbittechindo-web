import { Box, Typography, Grid } from "@mui/material";
import { Model_Cast } from "../../../home/api/api.type";
import { AvatarContainer } from "./Cast.style";

interface ICast {
  data: Model_Cast[];
}

export default function Cast({ data }: ICast) {
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"}>
        Cast
      </Typography>
      <Box display={"flex"} mt={2}>
        <Grid container spacing={2}>
          {data &&
            data.map((item, index) => {
              if (item.profile_path) {
                const srcAvatar = `https://image.tmdb.org/t/p/original/${item.profile_path}`;
                return (
                  <Grid item xs={6} key={index}>
                    <Box display={"flex"}>
                      <AvatarContainer>
                        <img src={srcAvatar} />
                      </AvatarContainer>
                      <Box pl={2} alignContent={"center"}>
                        <Typography fontWeight={"bold"}>{item.name}</Typography>
                        <Typography>{item.character}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              }
            })}
        </Grid>
      </Box>
    </Box>
  );
}
