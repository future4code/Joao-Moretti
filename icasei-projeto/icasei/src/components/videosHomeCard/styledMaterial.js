import { Card, CardContent, CardHeader } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const Title = styled(CardHeader)({
    textAlign: 'center',
    width: '100%'

})

export const CardVideo = styled(Card)({
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
    backgroundColor: '#FFFFFF',
    "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
})

export const CardDescription = styled(CardContent)({
    textAlign: 'center'
})