import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../../components/header/Header';
import MovieDetailCard from '../../components/movieDetailCard/MovieDetailCard';
import { API_KEY, BASE_URL } from '../../constants/url';
import useRequestDetails from '../../hooks/useRequestDetails';
import { MovieDetailsContainer } from './styed';

const MovieDetails = () => {

  const params = useParams()

  const details = [useRequestDetails(`${BASE_URL}movie/${params.id}${API_KEY}`, [])]

  

  return (
    <MovieDetailsContainer>
      <Header title={'Detalhes'} />

      {details && details.map((detail) => {
        return <MovieDetailCard key={detail.id} detail={detail} />
      })}
      
    </MovieDetailsContainer>
  );
}

export default MovieDetails