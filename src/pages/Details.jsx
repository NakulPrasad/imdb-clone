import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOVIEDETAILS_API_URL } from "../constants/constant";
import { fetchDataAPI } from "../services/api";
import DetailsBanner from "../components/DetailsBanner";
import { Box, styled, useMediaQuery } from "@mui/material";
import DetailsText from "../components/DetailsText";
import Header from "../components/common/Header";

const StyledBox = styled(Box)`
  display: flex;
`;

const Details = () => {
  const mobile = useMediaQuery(" (min-width : 1080px) ");
  const { id } = useParams();
  const [movieDetails, setmovieDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let responseDetails = await fetchDataAPI(
        `${MOVIEDETAILS_API_URL}${id}?api_key=a919d421096e061f264058805fcfbac3`
      );
      setmovieDetails(responseDetails);
    };
    getData();
  }, [id]); // id is added in the dependency array

  return (
    <>
      <Box sx={{ padding: !mobile ? "0 7.5%" : 0 }}>
        <Header />
      </Box>
      <StyledBox
        sx={{
          flexDirection: mobile ? "column" : "row",
          padding: !mobile ? "5vw 8%" : 0,
        }}
      >
        <DetailsBanner movie={movieDetails} />
        <DetailsText movie={movieDetails} />
      </StyledBox>
    </>
  );
};

export default Details;
