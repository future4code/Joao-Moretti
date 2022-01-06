import React from "react";
import { CardHome, TitleContainer, ThumbContainer, DescriptionContainer, ButtonContainer } from "./styled"
import { goToDetails } from "../../routes/Coordinator"
import { useHistory } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { CardDescription, CardVideo, Title } from "./styledMaterial";
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from "@material-ui/core";


const VideosHomeCard = (props) => {

  const history = useHistory()

  return (
    <CardVideo>
      <Title
        title={props.video.snippet.title}
      />
      
      <ThumbContainer>
        <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} onClick={() => goToDetails(history, props.video.id.videoId)}  />
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