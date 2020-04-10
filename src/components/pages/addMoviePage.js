import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormMovie from './forms/FormMovie';
import { onAddMovieSubmit, onUpdateMovieSubmit, onFetchEditMovie } from '../../actions/addMovieReducerAction';


class addMoviePage extends Component
{
    
    componentDidMount() {
        const { match } = this.props;

        if (!this.props.findEditMovie && match.params._id )
        {
            this.props.onFetchEditMovie(match.params._id);
        }
    }
    

    render() {
   
        return (
            <div>
                <FormMovie
                    findEditMovieProps = { this.props.findEditMovie}
                    addMovieReducerProps = { this.props.addMovieReducer }
                    onAddMovieSubmitProps = { this.props.onAddMovieSubmit }
                    onUpdateMovieSubmitProps = { this.props.onUpdateMovieSubmit }
                />
            </div>
        );
    }
}


const mapStateToProps = ({ addMovieReducer, moviesReducer }, props) => {
    return {
        addMovieReducer,
        findEditMovie: moviesReducer.moviesReducerList.find( item => item._id === props.match.params._id)
    }
};

const mapDispatchToProps = {
    onAddMovieSubmit,
    onUpdateMovieSubmit,
    onFetchEditMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(addMoviePage);
