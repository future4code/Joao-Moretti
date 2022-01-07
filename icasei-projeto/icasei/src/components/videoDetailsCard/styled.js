import styled from "styled-components";


export const VideoCard = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    iframe{
        width: 90%;
        height: 70%;
        margin: auto;
    }

`

export const InfosCard = styled.div`
        position: relative;
        bottom: 7%;
        left: 5%;

`

export const LikeCard = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    position: relative;
    left: 60%;
    bottom: 10%;

`

export const LikeIcone = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    bottom: 10%;
    right: 2%;
`

export const DeslikeIcone = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    bottom: 3%;
    left: 12%;

  
`