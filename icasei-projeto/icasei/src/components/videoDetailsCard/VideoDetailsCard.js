import { Typography } from "@material-ui/core";
import React from "react";
import { DeslikeIcone, InfosCard, LikeCard, LikeIcone, VideoCard } from "./styled";

const VideoDetailsCard = (props) => {

    const video = `https://www.youtube.com/embed/${props.item.id}`
    
    return <VideoCard>
       <iframe src={video} allowFullScreen title="Video player" />
       <InfosCard>
       <Typography variant="h5"> {props.item.snippet.title} </Typography>
        <Typography variant="subtitle1">{props.item.statistics.viewCount} visualizações</Typography>

       </InfosCard>
       <LikeCard>
        <LikeIcone src="https://cdn-icons.flaticon.com/png/512/880/premium/880554.png?token=exp=1641536869~hmac=65745fe1b8d14cfed1b2f1ddad8615eb" alt="icone like"/>
        <Typography variant="subtitle1"> {props.item.statistics.likeCount} likes </Typography>

        <DeslikeIcone src="https://cdn-icons.flaticon.com/png/512/880/premium/880561.png?token=exp=1641536887~hmac=8a7a20964beab0609f9f51a6612895f3" alt="icone deslike"/>
        <Typography variant="subtitle1"> ? </Typography>

       </LikeCard>
    </VideoCard>
}

export default VideoDetailsCard