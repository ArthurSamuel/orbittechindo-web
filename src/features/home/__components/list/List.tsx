import { Box, CircularProgress, Typography } from "@mui/material";
import { CardContent, Container } from "./List.style";
import Card from "../../../../components/card/Card";
import { Model_Movie } from "../../api/api.type";
import { useNavigate } from "react-router";

interface IList {
  data?: Model_Movie[];
  isLoding?: boolean;
}

export default function List({ data, isLoding }: IList) {
  const navigate = useNavigate();

  const handleOnClick = (item: Model_Movie) => {
    navigate(`/detail/${item.id}`);
  };

  if (!isLoding && data && data?.length <= 0) {
    return <Typography variant="h6">No Movie Found</Typography>;
  }

  return (
    <Container>
      {isLoding ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        data?.map((item, index) => {
          const src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
          return (
            <Card onClick={() => handleOnClick(item)} key={index}>
              <CardContent>
                <Box>
                  <img src={src} />
                </Box>
                <Box p={1}>
                  <Typography fontWeight={"bold"} variant="h6">
                    {item.original_title}
                  </Typography>
                  <Typography variant="caption">{item.overview}</Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })
      )}
    </Container>
  );
}
