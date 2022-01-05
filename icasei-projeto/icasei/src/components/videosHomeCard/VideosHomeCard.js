import React from "react";
import { CardHome, TitleContainer, ThumbContainer, DescriptionContainer, ButtonContainer } from "./styled"
import { goToDetails } from "../../routes/Coordinator"
import { useHistory } from "react-router-dom"


const VideosHomeCard = (props) => {

    const history = useHistory()

  return (
    <CardHome>
        <TitleContainer>
        <h3> {props.video.snippet.title} </h3>
        </TitleContainer>

        <ThumbContainer>
        <img src={props.video.snippet.thumbnails.medium.url} onClick={() => goToDetails(history, props.video.id.videoId)} alt={props.video.snippet.title}/> 
        </ThumbContainer>

        <DescriptionContainer>
            <p> {props.video.snippet.description} </p>
        </DescriptionContainer>

    </CardHome>
  );
}

export default VideosHomeCard;