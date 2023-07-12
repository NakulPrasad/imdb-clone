import Carousel from "react-multi-carousel";
import { Box, Divider, Typography, styled } from '@mui/material'
import { useEffect, useState } from "react";
import { categoryMovies } from "../services/api";
import { useLocation } from "react-router-dom";
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, movieType } from '../constants/constant'
import MovieList from "../components/MovieList";


const StyledBox = styled(Box)`
background: #F5F5F5; 
padding : 10px;
& > p {
    color: black;
}
`


const CategoryMovies = () => {

    //state
    const [movies, setMovies] = useState([]);

    //reteriving current link; gives query after ?
    const { search } = useLocation();

    //getting data form api
    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(API_URL);
            setMovies(response.results);
        }

        //using query to dynamicaly change api call
        let API_URL;
        if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        }
        else {
            API_URL = POPULAR_API_URL;
        }

        getData(API_URL);
    }, [search])



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
        <Box style={{ padding: '0 8%' }}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                swipeable={false}
                draggable={false}
                style={{ width: '80%' }}
            >
                {movies.map((movie) => {
                    return (
                        <>
                            <Box>

                                <img
                                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                    alt="banner"
                                    style={{ width: "100%", height: '480px' }}
                                />

                            </Box>

                        </>
                    );
                })}
            </Carousel>
            <StyledBox style={{}}>
                <Typography variant="h6">IMDb Charts</Typography>
                <Typography variant="h4">{movieType[search.split('=')[1]]}</Typography>
                <Typography style={{ fontSize: 14, margin: 5 }}>IMDb Top {movies.length} as rated by regular IMDb voters</Typography>
                <Divider />
                <MovieList movies={movies} />
            </StyledBox>
        </Box>
    )
}

export default CategoryMovies