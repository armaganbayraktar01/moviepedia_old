import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies, onDeleteMovieSubmit } from '../../actions/moviesReducerAction';

import MoviesList from './lists/moviesList';


class moviesPage extends Component
{

    static propTypes = {
        moviesReducer: PropTypes.object.isRequired,
        onDeleteMovieSubmit: PropTypes.func.isRequired        
    };

    // fetchmovies fonksiyonunu çalıştırdık
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <MoviesList 
                    moviesReducerProps = { this.props.moviesReducer }
                    onDeleteMovieSubmitProps = { this.props.onDeleteMovieSubmit }
                />                                
            </div>
        );
    }
}



// Reducer ı dahil ettim. 
const mapStateToProps = ({ moviesReducer }) => {
    return {
        moviesReducer           
    }
};

const mapDispatchToProps = {
    fetchMovies,
    onDeleteMovieSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(moviesPage);
