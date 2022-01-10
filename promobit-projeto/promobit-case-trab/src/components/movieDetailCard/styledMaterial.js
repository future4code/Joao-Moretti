import { Card, styled, Typography } from "@material-ui/core";

export const MovieDetailContainer = styled(Card)({
    
})

export const Title = styled(Typography)({
    textAlign: "center"
})

export const Description = styled(Typography)({
    textAlign: 'center'
})

export const Popularity = styled(Typography)({
    textAlign: 'center',
    position: 'relative',
    bottom: '25vh'
})

export const VotesContainer = styled(Card)({
    width: '40vw',
    margin: 'auto',
    position: 'relative',
    bottom: '20vh',
    height: '15vh',
    display: 'flex',
})  
    

export const VoteAverage = styled(Typography)({
    marginLeft: '14vw',
    marginRight: '5vw',
    marginTop: '3vh' 
})

export const VoteCount = styled(Typography)({
    marginTop: '3vh'
})

export const VoteAverageText = styled(Typography)({
    position: 'relative',
    top: '6vh',
    right: '8.5vw'
})

export const VoteCountText = styled(Typography)({
    position: 'relative',
    top: '6vh',
    right: '5vw'
})

