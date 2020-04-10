import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Image, Input, Button, TextArea } from 'semantic-ui-react';
import ErrorMessageLabel from '../../items/semantic/ErrorMessageLabel';

class FormMovie extends Component
{
    static propTypes = {
        onAddMovieSubmitProps: PropTypes.func.isRequired,
        addMovieReducerProps: PropTypes.object.isRequired
    };

    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectMovie } = nextProps.addMovieReducerProps;
        if ( selectMovie.title && selectMovie.title !== this.state.title )
        {
            this.setState({
                title: selectMovie.title,
                cover: selectMovie.cover,
                imbd: selectMovie.imbd,
                desc: selectMovie.desc
                //genres: selectMovie.genres
            })
        }
    }
   

    state = {
        _id: this.props.findEditMovieProps ? this.props.findEditMovieProps._id : "",
        title: this.props.findEditMovieProps ? this.props.findEditMovieProps.title : "",
        cover: this.props.findEditMovieProps ? this.props.findEditMovieProps.cover : "",
        imbd: this.props.findEditMovieProps ? this.props.findEditMovieProps.imbd : "",
        desc: this.props.findEditMovieProps ? this.props.findEditMovieProps.desc : "",
        formErrors: {},
        redirect: false
    };

    // FORM YARDIMCI FONKSİYONLAR

    formOnSubmit = () => 
    {
        const formErrors = this.formValidate();

        this.setState({
            formErrors,
            redirect: true
        });

        const _id = this.state._id || this.props.addMovieReducerProps.selectMovie._id;

        if (Object.keys(formErrors).length === 0 )
        {
            if ( !_id )

                this.props.onAddMovieSubmitProps( this.state );
            else
                this.props.onUpdateMovieSubmitProps( { ...this.state, _id })

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
                        loading = { this.props.addMovieReducerProps.fetching || this.props.addMovieReducerProps.selectMovie.fetching }
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
                            content = { 
                                this.props.addMovieReducerProps.selectMovie.editButtonActive === true
                                 ? "Edit Movie" : "Add Movie" 
                            } 
           
                               
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
                        this.props.addMovieReducerProps.done && this.state.redirect ?
                        <Redirect to="/movies" /> 
                        : form
                    )
                    
                }
                    
            </div>
        );
    }
}

export default connect(null, null)(FormMovie);
