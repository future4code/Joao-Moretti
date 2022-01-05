import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_KEY } from "../../constants/apiKey";
import { ButtonBackContainer, DetailsContainer, VideoContainer } from "./styled";

const DetailsPage = () => {

    const history = useHistory()
    const params = useParams()
    const [videoDetail, setVideoDetail] = useState({})


    console.log("deu bom" , videoDetail && videoDetail.items && videoDetail.items.snippet)
    // const getDetailsVideo = () => {
    //     axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.videoId}&part=snippet,statistics&key=${API_KEY}`)
    //     .then((response) => {
    //         setVideoDetail(response)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }   

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${params.videoId}&part=snippet,statistics&key=${API_KEY}`)
        .then((response) => {
            setVideoDetail(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

  return (
    <DetailsContainer>
        <ButtonBackContainer> 
            <Button variant="outlined" color="secondary" onClick={() => history.goBack()}> Voltar </Button>
        </ButtonBackContainer>

        <VideoContainer>
            <h2> {videoDetail && videoDetail.snippet && videoDetail.snippet.title} </h2>
        </VideoContainer>


      detalhes
    </DetailsContainer>
  );
}

export default DetailsPage;