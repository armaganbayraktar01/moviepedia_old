import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions/moviesReducerAction';

import MoviesList from './lists/moviesList';


class moviesPage extends Component
{

    static propTypes = {
        moviesReducer: PropTypes.object.isRequired        
    };

    // fetchmovies fonksiyonunu çalıştırdık
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <MoviesList 
                    moviesReducerProps={ this.props.moviesReducer }
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
    fetchMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(moviesPage);
