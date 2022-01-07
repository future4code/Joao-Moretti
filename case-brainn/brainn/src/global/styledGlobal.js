import styled from "styled-components";

export const TitleContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap');

    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
    position: relative;
    top: 0%;
    transform: translateY(-50%);
    margin-right: 15vw;

    h1{
        color: white;
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
    }

    img {
        padding: 16px;
        width: 40px;
        height: 40px;
    }
`