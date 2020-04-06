// moviesReducer

import { ADD_MOVIE_PENDING, ADD_MOVIE_FULFILLED, ADD_MOVIE_REJECTED } from '../actions/addMovieReducerAction';


const initialState = {
    fetching: false,
    done: false,
    addMovieReducerList: [],
    error: {}
}

export default (state = initialState, action) => 
{
    switch (action.type)
    {
        case ADD_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };

        case ADD_MOVIE_FULFILLED:
            return {
                ...state,
                addMovieReducerList: action.payload,
                fetching: false,
                done: true
            };

        case ADD_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        default:
            return state;
        }
    }
