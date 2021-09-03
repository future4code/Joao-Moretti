import styled from "styled-components";
import Card from '@material-ui/core/Card';
import { Avatar, Typography } from "@material-ui/core";

export const Container = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 20px;
        border-radius: 15px;
        @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap');
        
        `

export const ContainerFeed = styled.body`
    background-color: #DAE0E6;
   
`

export const FeedCardContainer = styled(Card)`
        width: 600px;
        max-width: 50vh;
        height: 300px;
        border-radius: 15px;
        box-shadow: 5px 5px 5px #E1E1E1;
        display: flex;
        flex-direction: column;
    
`

export const ContainerUserName = styled.div`
    display: flex;
    align-items: center;
    
    
    
`

export const UserAvatar = styled(Avatar)`
    /* width: 20px;
    height: 0px; */
    margin-right: 10px;
`

export const UserData = styled.div`
    
    /* flex-direction: column; */
    font-size: 12px;
    margin-left: 10px;
    position: relative;
    top: 11px;
    margin-right: 10px;
`
export const UserName = styled(Typography)`
    color: red;
    position: relative;
    top: 1px
    
`

export const HeaderPost = styled.div`
    box-shadow: 2px 2px 2px #E1E1E1;
    display: flex;
    justify-content: space-between;
`

export const BodyPost = styled.div`
    margin-top: 30px;
    text-align:center;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`