import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import CardMovieSemantic from '../../items/semantic/cards/CardMovieSemantic';

const movieCard  = ({ movieListDataProps }) => (
    <Grid.Column>
        <Card>
            <CardMovieSemantic
                cover = { movieListDataProps.cover }
                title = { movieListDataProps.title }
                imbd = { movieListDataProps.imbd }
                desc = { movieListDataProps.desc }
                releasedate = { movieListDataProps.releasedate }
                director = { movieListDataProps.director }
                stars = { movieListDataProps.stars }
                genres = { movieListDataProps.genres }
            />           
        </Card>
    </Grid.Column>
);



export default movieCard;