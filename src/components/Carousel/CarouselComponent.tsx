import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselWrapper, Container } from "./CarouselComponent.style";
import { Model_Movie } from "../../features/home/api/api.type";

interface ICarouselComponent {
  data?: Model_Movie[];
}

export default function CarouselComponent({ data }: ICarouselComponent) {
  return (
    <Container>
      <Carousel
        dynamicHeight={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={20}
      >
        {data &&
          data.map((item, index) => {
            const src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            return (
              <CarouselWrapper key={index}>
                <img src={src} />
              </CarouselWrapper>
            );
          })}
      </Carousel>
    </Container>
  );
}
