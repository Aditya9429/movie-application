import React, { useContext } from 'react';
import './Movie.css'
import { MovieContext } from '../Context/GlobalState';
// eslint-disable-next-line react/prop-types
export default function MovieCard({ movieItem, key }) {
   const {handleAddToWatchList , handleAddToWatchedList,state} = useContext(MovieContext)
    console.log(movieItem);
    return (
        <div className="movie-card" key={key}>
            <div className='img'>
                {
                    movieItem?.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w200${movieItem?.poster_path}`} />
                        : (
                            <div className='fill-img' >
                                No image available
                            </div>

                        )}

            </div>
            <div className='movie-info'>
                <h3>{movieItem?.title}</h3>
                <h4>{movieItem?.release_date}</h4>
                <h4>Original title : {movieItem.original_title}</h4>
            </div>
            <div className="buttons-wrapper">
                <button disabled = {state.watchList.findIndex((item) => item.id === movieItem.id) > -1 ? true : false } onClick={()=> handleAddToWatchList(movieItem)}>Add to WatchList</button>
                <button disabled = {state.watchedList.findIndex((item) => item.id === movieItem.id) > -1 ? true : false } onClick={()=> handleAddToWatchedList(movieItem)}>Add to Watched List</button>
            </div>
        </div>
    )
}

