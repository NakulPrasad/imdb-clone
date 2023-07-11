import { Box, Typography, styled } from "@mui/material"


const StyledBox = styled(Box)`
width: 35%; 
padding-left: 18px;
display: flex;
flex-direction: column;
align-items: baseline;
& > p {
    font-weight : 600;
    font-size : 20px;
    margin-bottom :10px;
    color: #F5C518;
}
`
const StyledBox2 = styled(Box)`
display: flex;
& > p {
    margin-left: 20px;

}
`

const UpNext = ({ movies }) => {
    console.log(movies);
    return (
        <StyledBox>
            <Typography>Up Next</Typography>
            {

                movies.splice(0, 3).map(function (movie) {
                    return (
                        <StyledBox2>
                            <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                                alt="poster"

                            />
                            <Box style={{ marginLeft: 8 }}>
                                <Typography>{movie.original_title}</Typography>
                                <Typography style={{ height: 66, overflow: 'hidden', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{movie.overview}</Typography>

                            </Box>


                        </StyledBox2>
                    );
                })

            }
        </StyledBox>
    )
}

export default UpNext