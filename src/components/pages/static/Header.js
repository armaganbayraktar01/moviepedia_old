import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';

//meta verilerini çekelim.
import { siteMeta, siteMenus } from '../../../config/siteMeta';


class Header extends Component
{

    render() {

        const header = (
            <div>
            <Menu fixed='top' inverted>
                <Container>

                    <Menu.Item as={ Link } to={siteMenus.homepage.path} exact="true">
                        <Image size='mini' src={ siteMeta.logo } style={{ marginRight: '1.5em' }} />
                        { siteMeta.title }
                    </Menu.Item>
                    
                    <Menu.Item as={ NavLink } to={siteMenus.moviespage.path} exact>
                        { siteMenus.moviespage.title }
                    </Menu.Item>

                    <Menu.Item as={ NavLink } to={siteMenus.addmoviepage.path} exact>
                        { siteMenus.addmoviepage.title }
                    </Menu.Item>

                </Container>
            </Menu>
            </div>
        )

        return (
            <div>
                { header }                    
            </div>
        );
    }
}


export default Header;
