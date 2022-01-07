import React from "react";
import { ThumbContainer } from "./styled"
import { goToDetails } from "../../routes/Coordinator"
import { useHistory } from "react-router-dom"
import { CardDescription, CardVideo, Title } from "./styledMaterial";
import Typography from '@material-ui/core/Typography';



const VideosHomeCard = (props) => {

  const history = useHistory()

  return (
    <CardVideo>
      <Title
        title={props.video.snippet.title}
      />

      <ThumbContainer>
        <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} onClick={() => goToDetails(history, props.video.id.videoId)} />
      </ThumbContainer>

      <CardDescription>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.video.snippet.description}
        </Typography>
      </CardDescription>
    </CardVideo>
  );
}

export default VideosHomeCard;