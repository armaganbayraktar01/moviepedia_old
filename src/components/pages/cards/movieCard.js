import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import CardMovieSemantic from '../../items/semantic/cards/CardMovieSemantic';


const movieCard  = ({ movieListDataProps, deleteMovieProps }) => (
    <Grid.Column>
        <Card>
            <CardMovieSemantic
                _id = { movieListDataProps._id }
                cover = { movieListDataProps.cover }
                title = { movieListDataProps.title }
                imbd = { movieListDataProps.imbd }
                desc = { movieListDataProps.desc }
                deleteButton = { deleteMovieProps }
            />           
        </Card>
    </Grid.Column>
);



export default movieCard;