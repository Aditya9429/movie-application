import React from 'react'
// import WatchList from '../Component/WatchList';
import { ADD_TO_WATCHEDLIST, ADD_TO_WATCHLIST, REMOVE_TO_WATCHLIST, REMOVE_TO_WATCHEDLIST, MOVE_TO_WATCHEDLIST } from './Type';
// import WatchedList from '../Component/WatchedList';
export default function Reducer(state, action) {

    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchList: [action.payload, ...state.watchList]
            }

        case ADD_TO_WATCHEDLIST:
            return {
                ...state,
                watchedList: [action.payload, ...state.watchedList]
            }

        case REMOVE_TO_WATCHLIST:
            return {
                ...state,
                watchList: state.watchList.filter(movieItem => movieItem.id != action.payload)
            }
        case REMOVE_TO_WATCHEDLIST:
            return {
                ...state,
                watchedList: state.watchedList.filter(movieItem => movieItem.id != action.payload)
            }
        case MOVE_TO_WATCHEDLIST:
            return {
                ...state,
                watchList: state.watchList.filter(movieItem => movieItem.id !== action.payload.id),
                watchedList: [action.payload, ...state.watchedList]
            }
        default:
            return state;
    }


}
