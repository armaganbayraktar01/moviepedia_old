import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import addMovieReducer from './addMovieReducer';


const RootReducer = combineReducers({
    moviesReducer: moviesReducer,
    addMovieReducer: addMovieReducer

});


export default RootReducer;