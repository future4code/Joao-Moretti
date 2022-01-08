import React from 'react'
import Header from "../../components/header/Header"
import MovieListCard from '../../components/movieListCard/MovieListCard';
import { API_KEY, BASE_URL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';
import { MoviesListContainer } from './styled';

const MovieList = () => {

  const movies = useRequestData(`${BASE_URL}movie/popular${API_KEY}`, [])

  console.log(movies)

  return (
    <div >
      <Header />
      <MoviesListContainer>
        {movies && movies.map((movie) => {
          return <MovieListCard key={movie.id} movie={movie} />
        })}
      </MoviesListContainer>
    </div>
  );
}

export default MovieList