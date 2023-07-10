import { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { categoryMovies } from '../services/api'
import { NOWPLAYING_API_URL } from '../constants/constant'
import { Box } from '@mui/icons-material';

const Home = () => {
    //store response from calling api  in state;
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);//calling api at load
            setMovies(response.results);//insert response
        }
        getData();
    }, [])


    return (
        <>
            <Header />
            <Box>
                <Banner />
            </Box>
        </>
    )
}

export default Home