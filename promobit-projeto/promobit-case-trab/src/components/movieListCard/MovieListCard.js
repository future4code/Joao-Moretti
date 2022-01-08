import React from 'react'
import { IMG_URL } from '../../constants/url';
import { Image, TitleContaier } from "./styled"
import { MovieCard, Title } from './styledMaterial';

const MovieListCard = (props) => {
    return (
        <MovieCard>

            <TitleContaier>
                <Title variant='h5'>{props.movie.title}</Title>
            </TitleContaier>
            <Image src={`${IMG_URL}${props.movie.poster_path}`} />

        </MovieCard>
    );
}

export default MovieListCard