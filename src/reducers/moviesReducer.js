// moviesReducer

import { ***_PENDING, ***_FULFILLED, ***_REJECTED } from '../actions/moviesReducerAction';

const initialState = {
    fetching: false,
    moviesReducerList: [],
    error: {}
}


export default (state = initialState, action) => 
{
    switch (action.type)
    {
        case ***_PENDING:
            return {
                ...state,
                fetching: true
            };

        case ***_FULFILLED:
            return {
                ...state,
                moviesReducerList: action.payload,
                fetching: false
            };

        case ***_REJECTED:
            return {
                ...state,
                fetching: false
            };

        default:
            return state;
        }
    }
