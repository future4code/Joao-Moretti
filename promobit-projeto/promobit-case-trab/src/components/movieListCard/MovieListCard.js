import React from 'react'
import { useHistory } from 'react-router-dom';
import { IMG_URL } from '../../constants/url';
import { goToDetails } from '../../routes/Coordinator';
import { Image, TitleContaier } from "./styled"
import { MovieCard, Title } from './styledMaterial';

const MovieListCard = (props) => {

    const history = useHistory()

    return (
        <MovieCard onClick={() => goToDetails(history, props.movie.id)}>

            <TitleContaier>
                <Title variant='h5'>{props.movie.title}</Title>
            </TitleContaier>
            <Image src={`${IMG_URL}${props.movie.poster_path}`} />

        </MovieCard>
    );
}

export default MovieListCard