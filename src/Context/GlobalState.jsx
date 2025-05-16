import  { createContext, useState,  useEffect, useReducer } from 'react'

import Usedebounce from '../component/UseDebounce';
// import WatchList from '../Component/WatchList';
// import WatchedList from '../Component/WatchedList';
import Reducer from './Reducer';
import { ADD_TO_WATCHEDLIST, ADD_TO_WATCHLIST, MOVE_TO_WATCHEDLIST, REMOVE_TO_WATCHEDLIST, REMOVE_TO_WATCHLIST } from './Type';
export const MovieContext = createContext(null)
const tmbi_api_key = '7cd25af5740713725027f406a5005b45'

const initalState = {
    watchList:   localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watchedList: localStorage.getItem('watchedList') ? JSON.parse(localStorage.getItem('watchedList')) : []
}
export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState(" ");
    const [loading, setLoading] = useState(false);
    const [searchMovieResult, setSearchMovieResult] = useState([]);

    const debounceSearchParam = Usedebounce(searchParam, 500);
    // console.log(debounceSearchParam);
    const [state, dispatch] = useReducer(Reducer, initalState);

    async function fetchList() {
        try {
            setLoading(true);
            const apiResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmbi_api_key}&query=${debounceSearchParam}&include_adult=false&language=en-US&page=1`, { method: 'GET' });
            const result = await apiResponse.json();
            console.log(result);
            if (result && result.results && result.results.length > 0) {
                setSearchMovieResult(result.results);
                setLoading(false)
            }
            // console.log(searchMovieResult);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    console.log(debounceSearchParam);

    useEffect(() => {
        // console.log(debounceSearchParam)
        if(debounceSearchParam !== " ")
        fetchList();
    }, [debounceSearchParam])
    
    useEffect(() => {
     localStorage.setItem('watchList' , JSON.stringify(state.watchList));
     localStorage.setItem('watchedList' , JSON.stringify(state.watchedList));

  },[state])
    
function handleAddToWatchList(movie){
    console.log('movie',movie);
    dispatch ({
       type : ADD_TO_WATCHLIST,
       payload : movie
    })
   }  
   function handleAddToWatchedList(movie){
    dispatch ({
        type : ADD_TO_WATCHEDLIST,
        payload : movie
     })
   }
   function handleToRemoveWatchList(id){
    dispatch ({
        type :REMOVE_TO_WATCHLIST,
        payload : id
     })
   }
   function handleToRemoveWatchedList(id){
    dispatch ({
        type : REMOVE_TO_WATCHEDLIST,
        payload : id
     })
   }
   function  handleMoveToWatchedList(movie){
    dispatch({
        type : MOVE_TO_WATCHEDLIST,
        payload : movie
        
    })
   }
   
   console.log(state,'state');
    return (
        <MovieContext.Provider value={{ searchParam, setSearchParam, loading, searchMovieResult,handleAddToWatchList,handleAddToWatchedList , state , handleToRemoveWatchList,handleToRemoveWatchedList ,handleMoveToWatchedList }}>
            {children}
        </MovieContext.Provider>
    )
}
