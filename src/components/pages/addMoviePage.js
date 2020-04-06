import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormMovie from './forms/FormMovie';
import { onAddMovieSubmit } from '../../actions/addMovieReducerAction';


class addMoviePage extends Component
{

    render() {
        return (
            <div>
                <FormMovie
                    addMovieReducerProps = { this.props.addMovieReducer }
                    onAddMovieSubmitProps = { this.props.onAddMovieSubmit }
                />
            </div>
        );
    }
}


const mapStateToProps = ({ addMovieReducer }) => {
    return {
        addMovieReducer   
    }
};

const mapDispatchToProps = {
    onAddMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(addMoviePage);
