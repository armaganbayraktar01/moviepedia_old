import axios from 'axios';
import { API_BASE } from '../config/env';


export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_FULFILLED = "ADD_MOVIE_FULFILLED";
export const ADD_MOVIE_REJECTED = "ADD_MOVIE_REJECTED";


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