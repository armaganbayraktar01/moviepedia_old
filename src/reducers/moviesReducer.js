// moviesReducer

import { 
    FETCH_MOVIE_PENDING, FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED,
    DELETE_MOVIE_PENDING, DELETE_MOVIE_FULFILLED, DELETE_MOVIE_REJECTED,
 } from '../actions/moviesReducerAction';


const initialState = {
    fetching: false,
    editButtonActive: false,
    moviesReducerList: [],
    error: {}
}

export default (state = initialState, action) => 
{
    switch (action.type)
    {
        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                editButtonActive: true
            };

        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                moviesReducerList: action.payload,
                fetching: false,
                editButtonActive: true
            };

        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload
            };


        // DELETE MOVIE
        case DELETE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                editButtonActive: true
            };

        case DELETE_MOVIE_FULFILLED:
            return {
                ...state,
                moviesReducerList: state.moviesReducerList.filter( item => item._id !== action.payload._id),
                fetching: false,
                editButtonActive: true
            };

        case DELETE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
        }
    }
