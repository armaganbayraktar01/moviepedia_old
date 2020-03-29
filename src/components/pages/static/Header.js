import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';

//meta verilerini çekelim.
import { siteMeta, siteMenus } from '../../../config/siteMeta';


class Header extends Component
{

    render() {

        const header = (
            <Menu fixed='top' inverted>
                <Container>

                    <Menu.Item as={Link} to={siteMenus.homepage.path} exact="true">
                        <Image size='mini' src={ siteMeta.logo } style={{ marginRight: '1.5em' }} />
                        { siteMeta.title }
                    </Menu.Item>


                </Container>
            </Menu>
        )

        return (
            <div>
                { header }                    
            </div>
        );
    }
}


export default Header;
