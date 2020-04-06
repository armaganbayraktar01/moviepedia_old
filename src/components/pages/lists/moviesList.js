import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessageLabel from '../../items/semantic/ErrorMessageLabel';
import MovieCard from '../cards/movieCard';
import { Grid } from 'semantic-ui-react';
import { ClockLoader } from 'react-spinners';


const moviesList  = ({ moviesReducerProps }) => {

    const emptyMovieListMessage = 
    (
        <ErrorMessageLabel
            errorTitle="Ooops"
            errorDesc="There are no movies yet"        
        />
    )

    const loader = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={moviesReducerProps.fetching}
                size={50}
            />
        }
        </Grid>
    )

    const movieCardContent = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            moviesReducerProps.moviesReducerList.map(
                movieListData => 
                <MovieCard
                    key={ movieListData._id }
                    movieListDataProps = { movieListData } 
                />
            )
        }
        </Grid>
    )
  

    const movieListContent = 
    (
        <div>
            {
                moviesReducerProps.error.response 
                ?
                    <ErrorMessageLabel
                        errorTitle="Disconnect Server"
                        errorDesc="Failed to retrieve data. Please try again later."        
                    />
                : movieCardContent 
            }
   
        </div>
    )

    return (

        <div>
            {
                moviesReducerProps.length === 0 ? emptyMovieListMessage : (
                    moviesReducerProps.fetching ? loader : movieListContent
                )                
            }    
        </div>
    );
};

moviesList.propTypes = {
    moviesReducerProps: PropTypes.shape({
        moviesReducerList: PropTypes.array.isRequired
    }).isRequired
};



export default moviesList;
