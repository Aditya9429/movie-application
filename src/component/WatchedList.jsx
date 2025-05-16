import  { useContext } from 'react'
import { MovieContext } from '../Context/GlobalState'

export default function WatchedList() {
  const {state , handleToRemoveWatchedList} = useContext(MovieContext)
  return (
    <div>
      <h1>Watched list</h1>
      <div>
        {
          state.watchedList && state.watchedList.length > 0 ?
            state.watchedList.map((movieItem) =>
              <div className="movie-card" key={movieItem.id}>
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
                  <button onClick={() => handleToRemoveWatchedList(movieItem.id)}>Remove from  WatchedList</button>
                  {/* <button disabled={state.watchedList.findIndex((item) => item.id === movieItem.id) > -1 ? true : false} onClick={() => handleAddToWatchedList(movieItem)}>Add to Watched List</button> */}
                </div>
              </div>

            
      )

      :

      <h1>There is no any movie in the watchedList Add one </h1>
        }
    </div>
    </div>
  )
}
