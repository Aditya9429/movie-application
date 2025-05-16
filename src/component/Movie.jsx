import React, { useContext } from 'react';
import { MovieContext } from '../Context/GlobalState';
import MovieCard from './MovieCard';
import './Movie.css'
import WatchList from './WatchList';
import WatchedList from './WatchedList';
export default function Movie() {
  const { searchParam, setSearchParam, loading, searchMovieResult } = useContext(MovieContext);
  // if(loading){
  //   return <h3>Loading...</h3>
  // }
  console.log(searchMovieResult);
  
  return (
  
    <div className="movie">
      <h1>Movie</h1>
      <div className='list'>
        <WatchList />
        <WatchedList />
      </div>
      <div className="search">
        <input
          type="text"
          name="searchParam"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder='Enter the movie name'
        />
      </div>  
      {
        loading ? <h1>Fetching list of movies ! Please Wait</h1> : null 
      }
      <div className='movie-result'>
        {
          searchMovieResult && searchMovieResult.length > 0 ?
            searchMovieResult.map((movieItem) => {
              return <MovieCard movieItem={movieItem} key={movieItem.id}/>;
            }) : null
        }
      </div>
    </div>
  )
}

