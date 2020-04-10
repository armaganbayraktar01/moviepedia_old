import axios from 'axios';
import { API_BASE } from '../config/env';

// ADD MOVIE
export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_FULFILLED = "ADD_MOVIE_FULFILLED";
export const ADD_MOVIE_REJECTED = "ADD_MOVIE_REJECTED";

// UPDATE MOVIE
export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";


// FETCH_EDIT_MOVIE
export const FETCH_EDIT_MOVIE_PENDING = "FETCH_EDIT_MOVIE_PENDING";
export const FETCH_EDIT_MOVIE_FULFILLED = "FETCH_EDIT_MOVIE_FULFILLED";
export const FETCH_EDIT_MOVIE_REJECTED = "FETCH_EDIT_MOVIE_REJECTED";



// ADD MOVIE
export function onAddMovieSubmit( { title, cover, desc, imbd } )
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "ADD_MOVIE",
                payload: axios.post(`${API_BASE}/movies`,
                {
                    title, cover, desc, imbd
                })
            }
        )            
    }
}

// UPDATE MOVIE
export function onUpdateMovieSubmit( { _id, title, cover, desc, imbd } )
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "UPDATE_MOVIE",
                payload: axios.put(`${API_BASE}/movies/${_id}`,
                {
                    title, cover, desc, imbd
                })
            }
        )            
    }
}

// FETCH_EDIT_MOVIE
export function onFetchEditMovie(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_EDIT_MOVIE",
                payload: axios.get(`${API_BASE}/movies/${id}`)
                .then( result => result.data)
            }
        )            
    }
}
