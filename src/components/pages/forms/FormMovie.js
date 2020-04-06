import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Image, Input, Select, Button, TextArea } from 'semantic-ui-react';
import ErrorMessageLabel from '../../items/semantic/ErrorMessageLabel';

const options = [
    { key: 1, text: 'Drama', value: 1 },
    { key: 2, text: 'Crime', value: 2 },
]

class FormMovie extends Component
{
    static propTypes = {
        onAddMovieSubmitProps: PropTypes.func.isRequired,
        addMovieReducerProps: PropTypes.object.isRequired
    };

    state = {
        _id: this.props.movieFilterUriProps ? this.props.movieFilterUriProps._id : '',
        title: this.props.movieFilterUriProps ? this.props.movieFilterUriProps.title : '',
        cover: this.props.movieFilterUriProps ? this.props.movieFilterUriProps.cover : '',
        imbd: this.props.movieFilterUriProps ? this.props.movieFilterUriProps.imbd : '',
        desc: this.props.movieFilterUriProps ? this.props.movieFilterUriProps.desc : '',
        //genres: this.props.movieFilterUriProps ? this.props.movieFilterUriProps.genres : '',
        formErrors: {},
        redirect: false
    };

    // FORM YARDIMCI FONKSİYONLAR

    formOnSubmit = () => 
    {
        const formErrors = this.formValidate();

        this.setState({
            formErrors,
            //redirect: true
        });

        if (Object.keys(formErrors).length === 0 )
        {
            this.props.onAddMovieSubmitProps( this.state );
        }
    };

    formHandleChange = (e) => 
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formValidate = () =>     
    {
        const err = {};
        if ( !this.state.title ) err.title = "Cant't be black"
        if ( !this.state.cover ) err.cover = "Cant't be black"
        if ( !this.state.imbd ) err.imbd = "Cant't be black"
        //if ( !this.state.genres ) err.genres = "Cant't be black"
        if ( !this.state.desc ) err.desc = "Cant't be black"

        return err;
    };


    render() {
  
       
        const formErrors = this.state.formErrors;
        const emptyPicture = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB468454186_.png";
        const errorMessage = 
        (      
            this.props.addMovieReducerProps.error.request &&
            (   
                <ErrorMessageLabel
                    errorTitle="Disconnect Server"
                    errorDesc="Failed to retrieve data. Please try again later."        
                />
            )

        )

        const form = 
        (
            <Grid celled>

                <Grid.Column width={6} verticalAlign="middle">

                    <Image
                        src = { this.state.cover ? this.state.cover : emptyPicture }
                        size = "medium"
                        verticalAlign = "middle"
                    />

                </Grid.Column>

                <Grid.Column width={10}>

                    <Form 
                        onSubmit= { this.formOnSubmit }
                        loading = { this.props.addMovieReducerProps.fetching }
                    >

                        <Form.Field
                            control = { Input }
                            id = "title"
                            name ="title"
                            label = "Movie Title"
                            value = { this.state.title }
                            placeholder = "Movie title..."
                            onChange = { this.formHandleChange }
                            error = { formErrors.title && formErrors.title }
                        />
                        <Form.Field
                            control = { Input }
                            id = "cover"
                            name ="cover"
                            label = "Movie Cover URL"
                            value = { this.state.cover }
                            placeholder = "Movie cover URL..."
                            onChange = { this.formHandleChange }
                            error = { formErrors.cover && formErrors.cover }
                        />
                        <Form.Group widths="equal">
                            <Form.Field
                                control = { Input }
                                id = "imbd"
                                name ="imbd"
                                label = "Movie Imbd"
                                value = { this.state.imbd }
                                placeholder = "Movie IMBD..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.imbd && formErrors.imbd }                          
                            />
                            <Form.Field
                                fluid
                                control = { Select }
                                id = "genres"
                                name ="genres"
                                label = "Movie Genre"
                                options = { options }
                                placeholder = "Movie Genres..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.genres && formErrors.genres }
                            />
                        </Form.Group>
                        <Form.Field
                            control = { TextArea }
                            id = "desc"
                            name ="desc"
                            label = "Movie Description"
                            value = { this.state.desc }
                            placeholder = "Movie description..."
                            onChange = { this.formHandleChange }
                            error = { formErrors.desc && formErrors.desc }                         
                        />

                        <Form.Field
                            fluid primary
                            control = { Button }
                            type = "submit"
                            content = "Add Movie"                  
                        />

                    </Form>
                </Grid.Column>

            </Grid>
        )

        return (
            <div>
                {
                    errorMessage ? errorMessage : 
                    (
                        this.props.addMovieReducerProps.done ? 
                        <Redirect to="/movies" /> 
                        : form
                    )
                    
                }
                    
            </div>
        );
    }
}

export default connect(null, null)(FormMovie);
