import React from 'react'
import CreatePost from '../../components/createPosts/CreatePots'
// import { useHistory } from 'react-router-dom';
import  Header  from '../../components/Header'
import { BASE_URL } from '../../constants/url'
import { useProtegedPage } from '../../hooks/useProtegedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToDetailsPage } from '../../router/coordinator'
import FeedCard from './FeedCard'
import { ContainerFeed } from './FeedCardStyles'

export const FeedPage = () => {
    useProtegedPage()
    // const history = useHistory()
    const getPosts = useRequestData([], `${BASE_URL}/posts`)
    console.log(getPosts)

    // const onClickDetails = (id) => {
    //     goToDetailsPage(history, id)

    // }

    const renderPost = getPosts && getPosts.map((posts) => {
        return (<FeedCard 
        key={posts.id}
        posts={posts}
        // onClick={() => onClickDetails(posts.id)}
        />)
    })
    
    return(
        <ContainerFeed>
            <Header/>
            <CreatePost />
            {renderPost}
        </ContainerFeed>
    )

}
