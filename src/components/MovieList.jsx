import { Star } from "@mui/icons-material";
import { styled, List, ListItem, Divider } from "@mui/material";

const Container = styled(List)`
display : flex;

`


const MovieList = ({ movies }) => {


    return (
        <>
            {
                movies.map(function (movie) {
                    return (
                        <Container>
                            <ListItem >

                                <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                                    alt="poster"

                                />
                            </ListItem>
                            <ListItem>

                                <sTypography>{movie.title}</sTypography>

                            </ListItem>
                            <ListItem>
                                <Star color={'warning'} />
                                <sTypography >{movie.vote_average} </sTypography>
                            </ListItem>
                            <ListItem>
                                <sTypography >{movie.release_date}</sTypography>
                            </ListItem>
                            <Divider />
                        </Container>
                    );
                })

            }
        </>
    )
}

export default MovieList