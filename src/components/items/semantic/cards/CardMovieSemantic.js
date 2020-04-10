import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Label, Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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
                            ribbon= {"right"}
                            icon = {"plus"}
                            color = {"grey"}
                        />

                        <Label
                            as="a"
                            corner = {"left"}
                            icon = {"heart"}
                            color = {"red"}
                        />
                    </div>
                </div>
                <div className="content">
                    
                    <Header as='h5' content={ props.title ? props.title : "" }/>

                    <div className="meta">

                        <Label color="teal">
                            IMBD :
                            <Label.Detail content={ props.imbd ? props.imbd : "" }/>
                        </Label>

                        <Segment vertical>
                        { props.desc ? props.desc : ""} 
                        </Segment>

                    </div>
                    <div className="extra content">
                    <div className="ui two buttons">
                        <Button animated='fade' as={ Link } to={`/movie/${props._id}`}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name='pencil' />
                            </Button.Content>
                        </Button>

                        <Button animated='fade' onClick={() => props.deleteButton(props._id)}>
                            <Button.Content visible>Delete</Button.Content>
                            <Button.Content hidden>
                                <Icon name='trash' />
                            </Button.Content>
                        </Button>

                    </div>

                        
                    </div>
                </div>             
            </div>
        </div>
    );
};


CardMovieSemantic.propTypes = {
    _id:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    //imbd: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
};

export default CardMovieSemantic;
