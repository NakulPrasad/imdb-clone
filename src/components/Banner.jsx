import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = ({ movies }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Box style={{ width: "65%" }}>
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
                        <img
                            src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                            alt="banner"
                            style={{ width: "100%" }}
                        />
                    );
                })}
            </Carousel>
        </Box>
    );
};

export default Banner;
