import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class moviesPage extends Component
{

    constructor(){
        super();
            
    }


    static propTypes = {
        
    };


    state = {
        
    };


    render() {
        return (
            <div>
                MOVIES LİST                    
            </div>
        );
    }
}


moviesPage.propTypes = {
    
};

const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(moviesPage);
