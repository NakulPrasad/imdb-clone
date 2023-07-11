import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-multi-carousel";

const Slide = ({ movies }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Box>
            <Typography>Featured Today</Typography>
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
                        <Box style={{ margin_top: '5px' }}>

                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                alt="banner"
                                style={{ width: "100%" }}
                            />
                            <Typography>{movie.title}</Typography>
                        </Box>
                    );
                })}
            </Carousel>

        </Box>
    )
}

export default Slide