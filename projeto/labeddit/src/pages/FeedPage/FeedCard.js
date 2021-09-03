import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { BodyPost, Container, ContainerUserName, DivButtons, FeedCardContainer, HeaderPost, UserAvatar, UserData, UserName } from './FeedCardStyles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { goToDetailsPage } from '../../router/coordinator';
import Header from '../../components/Header';
import { convertDate } from '../../services/convertData';
import { VotePost } from '../../components/votePost/VotePost';






export default function FeedCard(props) {
    const history = useHistory()

    const onClickDetailsPage = (id) => {
        goToDetailsPage(history, id)
    }

  return (
      <Container>
          
    <FeedCardContainer  >
      <CardContent>
        <HeaderPost>
        <ContainerUserName>
      <UserAvatar src="/broken-image.jpg">                
            </UserAvatar>
        <UserName  color="h4" gutterBottom>
        
         <strong> {props.posts.username} </strong>
        </UserName>
        </ContainerUserName>
            <UserData>
          <p>{convertDate(props.posts.createdAt)}</p>
          </UserData>
        </HeaderPost>
        <BodyPost>   
        <Typography variant="h5" component="h2">
          {props.posts.title}
        </Typography>

          <br />
        <Typography variant="body2" component="p">
         {props.posts.body}
        </Typography>
      
        </BodyPost> 
      </CardContent>

        <DivButtons>          
            <VotePost postsId={props.posts.id}/>
        <Button onClick={() => onClickDetailsPage(props.posts.id)}>Ver Comentarios</Button>
        </DivButtons>

    </FeedCardContainer>
      
    
    </Container>
  );
}