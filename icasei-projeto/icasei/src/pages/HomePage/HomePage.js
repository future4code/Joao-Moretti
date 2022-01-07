import React, { useEffect, useState } from "react";
import { ButtonContainer, HomeContainer, SearchContainerForm, Text, VideosContainer } from "./styled";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import { API_KEY } from "../../constants/apiKey"
import VideosHomeCard from "../../components/videosHomeCard/VideosHomeCard";


const HomePage = () => {


    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    const getVideos = () => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`, {
            params: {
                type: "video",
                part: "snippet",
                q: search,
                maxResults: 9
            }
        })
            .then((response) => {
                setVideos(response.data.items)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        if (videos && videos.length > 0) {
            getVideos()
        }
    }, [])



    const onSubmit = (event) => {
        event.preventDefault()
        getVideos()

    }

    return (
        <HomeContainer>
            <Text> Pesquise videos no youtube </Text>

            <SearchContainerForm onSubmit={onSubmit}>
                <TextField
                    label="Pesquisar"
                    variant="outlined"
                    value={search}
                    onChange={onChange}
                    fullWidth
                    required
                />
                <ButtonContainer>
                    <Button color="secondary" variant="contained" type="submit">Pesquisar</Button>
                </ButtonContainer>
            </SearchContainerForm>

            <VideosContainer>
                {videos && videos.map((video) => {
                    return <VideosHomeCard key={video.id.videoId} video={video} />
                })}
            </VideosContainer>

        </HomeContainer>
    );
}

export default HomePage;