import { Box, Typography } from "@mui/material"


const UpNext = ({ movies }) => {
    console.log(movies);
    return (
        <Box style={{ width: "35%", padding: '0 12px' }}>
            <Typography>UP Next</Typography>
            {

                movies.splice(0, 3).map(function (movie) {
                    return (
                        <Box style={{ display: 'flex' }}>
                            <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                                alt="poster"

                            />
                            <Typography>{movie.original_title}</Typography>
                        </Box>
                    );
                })

            }
        </Box>
    )
}

export default UpNext