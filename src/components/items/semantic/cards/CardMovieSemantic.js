import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Label, Button, Icon, Segment } from 'semantic-ui-react';

const CardMovieSemantic  = props => {
    return (
        <div>
            <div className="ui card">
                <div className="ui card">
                    <div className="ui fluid image">

                        <Image
                            src={ props.cover ? props.cover : "..." }
                        />

                        <Label
                            as="a"
                            ribbon={"left"}
                            icon={"plus"}
                            color={"grey"}
                        />

                        <Label
                            as="a"
                            corner={"right"}
                            icon={"heart"}
                            color={"red"}
                        />
                    </div>
                </div>
                <div className="content">
                    
                    <Header as='h5' content={ props.title ? props.title : "..." }/>

                    <div className="meta">

                        <Label color="white">
                            IMBD :
                            <Label.Detail content={ props.imbd ? props.imbd : "..." }/>
                        </Label>
                        <Label color="white">
                            Relase :
                            <Label.Detail content={ props.releasedate ? props.releasedate : "..." }/>
                        </Label>
                        <Label color="white">
                            Director :
                            <Label.Detail as="a" content={ props.director ? props.director : "..."} />
                        </Label>
                        <Label color="white">
                            Stars :
                            <Label.Detail as="a"  content={ props.stars ? props.stars : "..."} />
                        </Label>
                        <Label color="teal">
                            Genres:
                            <Label.Detail as='a' content={ props.genres ? props.genres : "..."} />
                        </Label>

                        <Segment vertical>
                        { props.desc ? props.desc : "..."} 
                        </Segment>

                    </div>



                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <Button animated='fade'>
                            <Button.Content visible><Icon name='pencil'/></Button.Content>
                            <Button.Content hidden>Edit</Button.Content>
                        </Button>
                        <Button animated='fade'>
                            <Button.Content visible><Icon name='trash'/></Button.Content>
                            <Button.Content hidden>Delete</Button.Content>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


CardMovieSemantic.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    imbd: PropTypes.string.isRequired,
    releasedate: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    stars: PropTypes.object.isRequired,
    genres: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired,
};

export default CardMovieSemantic;
