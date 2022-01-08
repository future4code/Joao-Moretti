import { Card, styled, Typography } from "@material-ui/core";

export const MovieCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '22vw',
    height: '65vh',
    margin: 'auto',
    margin: '5vh 0',
    backgroundColor: '#202020',
    paddingTop: '5vh',

    "&:hover": {
        backgroundColor: '#6d6d6d',
        cursor: 'pointer'
      }
})


export const Title = styled(Typography)({
    color: 'white',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center'
    
})