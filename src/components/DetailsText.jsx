import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {isMobile as mobile} from 'react-device-detect';
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  & > p {
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

const DetailsText = ({ movie }) => {
  
  return (
    <>
      <StyledBox
        sx={{
          width: mobile ? "100%" : "70%",
          padding: mobile ? "0 0 3vh 3px" : "0 0 0 18px",
        }}
      >
        <Typography variant="h3" sx={{ color: "#f5c518" }}>
          {movie.title}
        </Typography>
        <Typography sx={{ padding: "1vh 0" }}>{movie.tagline}</Typography>
        <Typography
          style={{
            padding: "2vh 0",
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {movie.overview}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            fontSize: "16px",
          }}
        >
          {movie?.genres?.map((g) => {
            return <Typography key={movie.id}>{g.name}</Typography>;
          })}
        </Box>
      </StyledBox>
    </>
  );
};

export default DetailsText;
