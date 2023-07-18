import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOVIEDETAILS_API_URL } from "../constants/constant";
import { fetchDataAPI } from "../services/api";
import DetailsBanner from "../components/DetailsBanner";
import { Box, styled } from "@mui/material";
import DetailsText from "../components/DetailsText";

const StyledBox = styled(Box)`
  display: flex !important;
  padding: 5vw 8% !important;
`;

const Details = () => {
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
    <StyledBox>
      <DetailsBanner movie={movieDetails} />
      <DetailsText movie={movieDetails} />
    </StyledBox>
  );
};

export default Details;
