import React from "react";
import { Box } from "@mui/material";

const DetailsBanner = ({ movie }) => {
  return (
    <Box style={{ width: "20%" }} key={movie.id}>
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
