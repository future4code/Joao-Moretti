import { Typography } from "@material-ui/core";
import React from "react";
import { IMG_URL } from "../../constants/url";
import { DescriptionContainer, Image, ImageContainer, TitleContaier} from "./styled";
import { Description, MovieDetailContainer, Popularity, Title, VoteAverage, VoteAverageText, VoteCount, VoteCountText, VotesContainer  } from "./styledMaterial";

const MovieDetailCard = (props) => {
    return <MovieDetailContainer>
        <TitleContaier>
        <Title variant='h2'> {props.detail.title} </Title>
        </TitleContaier>

        <DescriptionContainer>
            <Description variant="body1"> {props.detail.overview} </Description>
        </DescriptionContainer>

        <ImageContainer>
        <Image src={`${IMG_URL}${props.detail.backdrop_path}`} />
        <p> Data de lançamento: {props.detail.release_date} </p>
        </ImageContainer>

        <Popularity variant="h5"> <strong>Popularidade:</strong> {props.detail.popularity} </Popularity>

        <VotesContainer>
            <VoteAverage variant="h5">  {props.detail.vote_average} </VoteAverage>
            <VoteAverageText>Media de votos</VoteAverageText>
            <VoteCount variant="h5"> {props.detail.vote_count} </VoteCount>
            <VoteCountText> Contagem de votos </VoteCountText>
        </VotesContainer>





    </MovieDetailContainer>

}

export default MovieDetailCard