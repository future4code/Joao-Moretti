import { Button} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import VideoDetailsCard from "../../components/videoDetailsCard/VideoDetailsCard";
import { API_KEY } from "../../constants/apiKey";
import { ButtonBackContainer, DetailsContainer} from "./styled";
import { CardDetails } from "./styledMaterial";

const DetailsPage = () => {

  const history = useHistory()
  const params = useParams()
  const [videoDetail, setVideoDetail] = useState([])

  const getDetailsVideo = () => {

    axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.videoId}&part=snippet,statistics&key=${API_KEY}`)
      .then((response) => {
        setVideoDetail(response.data.items)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(() => {
    getDetailsVideo()
  }, [`https://www.googleapis.com/youtube/v3/videos?id=${params.videoId}&part=snippet,statistics&key=${API_KEY}`])

  return (
    <DetailsContainer>
      <ButtonBackContainer>
        <Button variant="outlined" color="secondary" onClick={() => history.goBack()}> Voltar </Button>
      </ButtonBackContainer>

      <CardDetails>
        {videoDetail && videoDetail.map((item) => {
          return <VideoDetailsCard key={item.id} item={item} />
        })}
      </CardDetails>

    </DetailsContainer>
  );
}

export default DetailsPage;