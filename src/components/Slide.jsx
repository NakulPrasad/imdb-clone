import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Slide = ({ movies, title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1080, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const navigate = useNavigate();
  const mobile = useMediaQuery(" (min-width : 1080px) ");
  return (
    <Box sx={{ m: "0 0 20 0" }}>
      <Typography
        style={{
          color: "#F5C518",
          fontSize: "3vh",
          fontWeight: 600,
          padding: mobile ? "1vh 0%" : "0 0%",
        }}
      >
        {title}
      </Typography>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        swipeable={false}
        draggable={false}
      >
        {movies.map((movie) => {
          return (
            <Box
              style={{ margin_top: "5px" }}
              key={movie.id}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt="banner"
                style={{ width: "100%" }}
              />
              <Typography>{movie.title}</Typography>
              <Typography sx={{ color: "grey" }}>
                {dayjs(movie.release_date).format("MMM D, YYYY")}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Slide;
