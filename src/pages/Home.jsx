import { useEffect, useState } from 'react'
import { categoryMovies } from '../services/api'
import { NOWPLAYING_API_URL, TOPRATED_API_URL, UPCOMING_API_URL } from '../constants/constant'
import { Box, styled } from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';

//Crousel + UPNEXT for whole page
const StyledBox = styled(Box)`
display: flex !important; 
padding : 18px 0;
`

const Home = () => {
    //store response from calling api  in state;
    const [movies, setMovies] = useState([])
    const [moviesTop, setMoviesTop] = useState([])
    const [moviesUp, setMoviesUp] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);//calling api at load
            let responseTop = await categoryMovies(TOPRATED_API_URL);
            let responseUp = await categoryMovies(UPCOMING_API_URL);
            setMovies(response.results);//insert response
            setMoviesTop(responseTop.results);//insert response
            setMoviesUp(responseUp.results);
        }
        getData();
    }, [])

    // console.log(movies);


    return (
        <>
            <Box style={{ padding: '0 110px' }}>
                <StyledBox >
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </StyledBox>
                <Slide movies={movies} title={'Featured Today'} />
                <Slide movies={moviesTop} title={'Greatest All Time'} />
                <Slide movies={moviesUp} title={'Up Coming '} />
            </Box>

        </>
    )
}

export default Home