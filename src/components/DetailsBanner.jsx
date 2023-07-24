import React from "react";
import { Box, useMediaQuery } from "@mui/material";

const DetailsBanner = ({ movie }) => {
  const mobile = useMediaQuery(" (max-width : 768px) ");
  return (
    <Box style={{ width: !mobile ? "20%" : "100%" }} key={movie.id}>
      <img
        key={movie.id}
        src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
        alt="banner"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default DetailsBanner;
