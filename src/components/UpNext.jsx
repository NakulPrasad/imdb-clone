import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isMobile as mobile } from "react-device-detect";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  & > p {
    font-weight: 600;
    font-size: 3vh;
    margin-bottom: 10px;
    color: #f5c518;
  }
`;
const StyledBox2 = styled(Box)`
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;

const UpNext = ({ movies }) => {
  // console.log(movies);
  const navigate = useNavigate();
  return (
    <StyledBox
      sx={{
        width: mobile ? "100%" : "35%",
        paddingLeft: !mobile ? "18px" : "2%",
      }}
    >
      <Typography>Up Next</Typography>
      {movies.splice(0, 3).map(function (movie) {
        return (
          <StyledBox2
            key={movie.id}
            sx={{ cursor: "pointer", padding: mobile ? "2vh 0%" : "0 0%" }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
              alt="poster"
            />
            <Box style={{ marginLeft: 8 }}>
              <Typography>{movie.original_title}</Typography>
              <Typography
                style={{
                  height: 66,
                  overflow: "hidden",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {movie.overview}
              </Typography>
            </Box>
          </StyledBox2>
        );
      })}
    </StyledBox>
  );
};

export default UpNext;
